

import requests

from requests.auth import HTTPBasicAuth

from urllib import request


YOUR_KEY = "key"

AUTH = HTTPBasicAuth(YOUR_KEY, "")

BASE_URL = "https://co2.eaternity.ch"

if YOUR_KEY == "CHANGEME":

    raise RuntimeError("Please change your api key!!")


def hello(kitchen_id, recipe_id):
    request_i = requests.get('https://co2.eaternity.ch/api/kitchens/{kitchen_id}/recipes/{recipe_id}', auth=AUTH)
    print(request_i)
    response_body = request.urlopen(request_i).read()
    print(response_body)


def create_kitchen(name, kitchen_id, location):

    url = f"{BASE_URL}/api/kitchens/{kitchen_id}"

    body = {

        "kitchen": {

            "name": name,

            "location": location

        }

    }

    response = requests.put(url, json=body, auth=AUTH)
    print(response)
    if response.status_code not in [200, 201, 202]:

        print(f"ERROR: Failed PUTting kitchen {kitchen_id} with status {response.status_code}: '{response.text}'")

    else:

        print(f"SUCCESS: PUT kitchen {kitchen_id}")

        return response.json()

def put_recipe(recipe_id, kitchen_id):

    url = f"{BASE_URL}/api/kitchens/{kitchen_id}/recipes/{recipe_id}"
    body = {

        "recipe": {

            "titles": [

                {

                    "language": "en",

                    "value": "Carrots and onions"

                }

            ],

            "date": "2020-09-19",

            "location": "Schweiz",

            "servings": 1,

            "ingredients": [

                {

                    "id": "my_unique_carrot_id",

                    "names": [{"language": "en", "value": "Carrots"}],

                    "amount": 250,

                    "unit": "gram",

                    "origin": "Germany",

                    "transport": "ground",

                    "production": "standard",

                    "conservation": "fresh"

                },

                {

                    "id": "my_unique_onion_id",

                    "names": [{"language": "en", "value": "Onions"}],

                    "amount": 75,

                    "unit": "gram",

                    "origin": "Poland",

                    "transport": "ground",

                    "production": "standard",

                    "conservation": "dried"

                }

            ]

        }

    }

    response = requests.put(url, json=body, auth=AUTH)

    if response.status_code not in [200, 201, 202]:

        print(f"ERROR: Failed PUTting recipe {recipe_id} with status {response.status_code}: '{response.text}'")

    else:

        print(f"SUCCESS: PUT recipe {recipe_id}")

        return response.json()


def get_product_info():
    request_url = request.Request('https://co2.eaternity.ch/api/products/2342')

    response_body = request.urlopen(request_url).read()
    print(response_body)


def new_product_info():

    url = 'https://co2.eaternity.ch/api/products/2342'
    body = {}
    response = requests.Request(url, auth=AUTH)
    print(response)
    response_body = request.urlopen(response).read()
    print(response_body)
    if response.status_code not in [200, 201, 202]:

        print(f"ERROR: 200, 201 or 202")

    else:

        print(f"SUCCESS")
        print(response)
        # return response.json()


def next_try(product_id):

    url = f"{BASE_URL}/api/products/{product_id}"
    body = {

        "recipe": {

            "titles": [

                {

                    "language": "en",

                    "value": "Carrots and onions"

                }

            ],

            "date": "2020-09-19",

            "location": "Schweiz",

            "servings": 1,

            "ingredients": [

                {

                    "id": "my_unique_carrot_id",

                    "names": [{"language": "de", "value": "Karotten"}],

                    "amount": 100,

                    "unit": "gram",

                    "origin": "Germany",

                    "transport": "ground",

                    "production": "standard",

                    "conservation": "fresh"

                },

            ]

        }

    }

    response = requests.get(url, json=body, auth=AUTH)
    print(response)
    if response.status_code not in [200, 201, 202]:

        print(f"ERROR: Failed finding Product {product_id} with status {response.status_code}: '{response.text}'")

    else:

        print(f"SUCCESS: Product {product_id}")

        return response.json()



if __name__ == '__main__':

    kitchen_id = "my_first_kitchen"
    # get_product_info()
    # new_product_info()
    # next_try(23434)
    create_kitchen("My First Kitchen", kitchen_id, "Switzerland")
    hello = put_recipe("my_first_recipe", kitchen_id)
    print(hello['recipe']['co2-value'])
    hello(kitchen_id, "my_first_recipe")
    
p
