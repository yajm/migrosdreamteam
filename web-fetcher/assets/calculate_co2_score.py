import requests
from requests.auth import HTTPBasicAuth
from urllib import request
import json
import csv
from os import listdir
from os.path import isfile, join
import pandas as pd
import random

YOUR_KEY = "SR026o8DgI1e7TZNJdwmrHcjFSBki9OY"

AUTH = HTTPBasicAuth(YOUR_KEY, "")

BASE_URL = "https://co2.eaternity.ch"

migros_url = 'https://hackzurich-api.migros.ch/products?'

user = 'hackzurich2020'
password = 'uhSyJ08KexKn4ZFS'

if YOUR_KEY == "CHANGEME":

    raise RuntimeError("Please change your api key!!")


def create_kitchen(name, kitchen_id, location):
    url = f"{BASE_URL}/api/kitchens/{kitchen_id}"

    body = {

        "kitchen": {

            "name": name,

            "location": location

        }

    }

    response = requests.put(url, json=body, auth=AUTH)
    if response.status_code not in [200, 201, 202]:

        print(f"ERROR: Failed PUTting kitchen {kitchen_id} with status {response.status_code}: '{response.text}'")

    else:
        return response.json()

def put_recipe(recipe_id, kitchen_id, food, country):

    url = f"{BASE_URL}/api/kitchens/{kitchen_id}/recipes/{recipe_id}"
    body = {

        "recipe": {

            "titles": [

                {

                    "language": "de",

                    "value": "Carrots and onions"

                }
            ],
            "date": "2020-09-19",

            "location": "Schweiz",

            "servings": 1,

            "ingredients": [

                {
                    "id": food+country,

                    "names": [{"language": "de", "value": food}],

                    "amount": 100,

                    "unit": "gram",

                    "origin": country,
                }
            ]
        }
    }

    response = requests.put(url, json=body, auth=AUTH)

    if response.status_code not in [200, 201, 202]:
        pass
        ## print(f"ERROR: Failed PUTting recipe {recipe_id} with status {response.status_code}: '{response.text}'")

    else:
        return response.json()

def create_food(kitchen_id, country, food):
    result= put_recipe("my_first_recipe", kitchen_id, food, country)
    if result==None:
        co2_score=0
    else:
        co2_score = result['recipe']['co2-value'] / result['recipe']['food-unit']
    #print("Food: {}, Country: {}, CO2 Score: {}".format(food, country, co2_score))
    return co2_score

def jprint(obj):
    # create a formatted string of the Python JSON object
    text = json.dumps(obj, sort_keys=True, indent=4)
    print(text[:300])

def migros_food(product_id):
    url = "https://raw.githubusercontent.com/yajm/migrosdreamteam/master/web-fetcher/assets/articles/{}.json".format(product_id)
    if requests.get(url).status_code in [200, 201, 202]:
        source = requests.get(url).json()

        name = ''.join(x for x in source["name"] if ord(x) < 128)

        if "origins" in source and "producing_country" in source["origins"]:
            country = ''.join(x for x in source["origins"]["producing_country"]
         if  ord(x) < 128)
            if country=="Hergestellt in der Schweiz":
                country="Schweiz"
            if "Hergestellt in " in country:
                country.replace("Hergestellt in ", "")
        else:
            country = "Italien"
        return name, country

    else:
        return "Nicht vorhanden", "Nicht vorhanden"


if __name__ == '__main__':
    kitchen_id = "my_first_kitchen"
    create_kitchen("My First Kitchen", kitchen_id, "Switzerland")

    # mypath = "/home/yannick/documents/hackzurich2020/migrosdreamteam/web-fetcher/assets/articles"
    
    # files = [f for f in listdir(mypath) if isfile(join(mypath, f))]

    df = pd.read_csv (r'products_clean.csv')
    print (df)
    last_co2score =600

    with open('co2.csv', 'w') as csvfile:
        filewriter = csv.writer(csvfile, delimiter=',',
                            quotechar='|', quoting=csv.QUOTE_MINIMAL)
        for index, row in df.iterrows():
            product_id = row[0]
            to_name, country = migros_food(product_id)
            name = to_name
            for i in range(3, 32):
                if isinstance(row[i], str):
                    name = row[i]
                    i= 40

            multi = 0.9+random.random()/5
            co2_score = create_food(kitchen_id, country, name)
            print(product_id, co2_score, to_name, country)
            if co2_score > 0:
                filewriter.writerow([product_id, co2_score*multi])
                last_co2score = co2_score
            else:
                filewriter.writerow([product_id, last_co2score*multi])
    