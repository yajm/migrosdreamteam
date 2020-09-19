import { Controller, Get, Param } from '@nestjs/common';
import { Console } from 'console';


const csv = require('csv-parser');
const fs = require('fs');

const results = [];
let sorted = [];

fs.createReadStream('data/products_clean.csv')
  .pipe(csv({ separator: ',' }))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results.length);
    sorted = results;
    /*
    sorted = results.sort((t1, t2) => {
        const name1 = results[t1] && results[t1].product_name ? results[t1].product_name.toLowerCase() : "";
        const name2 = results[t2] && results[t2].product_name ? results[t2].product_name.toLowerCase() : "";
        if (name1 > name2) { return 1; }
        if (name1 < name2) { return -1; }
        return 0;
      });
    */
  });   

  function binarySearch(seekElement: number): number {
    let startIndex = 0;
    let endIndex: number = sorted.length - 1;
    while (startIndex <= endIndex) {
      const mid = startIndex + Math.floor((endIndex - startIndex) / 2);
      const guess = sorted[mid].id;
      if (guess === seekElement) {
        return mid;
      } else if (guess > seekElement) {
        endIndex = mid - 1;
      } else {
        startIndex = mid + 1;
      }
    }
    return -1;
  }

  function search(seekElement: number): number {
    let i = 0;
    const endIndex: number = sorted.length - 1;
    while (i <= endIndex) {
      const guess = sorted[i].id;
      if (guess === seekElement) {
        return i;
      }
      i++;
    }
    return -1;
  }

function matchWeight(index, prevIndex, prevMatchVal):number {
    if (index < 0 || index >= sorted.length) {
      console.log(index + "... seems wrong");
      return -1;
    }
    if (prevIndex < 0) {
         return 4; // Default
    }
    if (prevMatchVal == 1) {
        return 0; // Cannot be better
    }
    const prodName1 = sorted[index] ? sorted[index].product_name : "";
    const prodName2 = sorted[prevIndex] ? sorted[prevIndex].product_name : "";
    if (prodName1 == prodName2) {
        return 1; // Name Matching is top
    }
    if (prodName1.split(" ")[0] == prodName2.split(" ")[0]) {
        return 2; // First part of name
    }
    if (sorted[index].cat_5 == sorted[prevIndex].cat_5 && sorted[index].cat_4 == sorted[prevIndex].cat_4 &&
        sorted[index].cat_3 == sorted[prevIndex].cat_3 && sorted[index].cat_2 == sorted[prevIndex].cat_2 &&
        sorted[index].cat_1 == sorted[prevIndex].cat_1) {
            return 3; // Category
    }
    return 0;
}


@Controller('searchproducts')
export class SearchProductsController {
    @Get(':id')
    findMatchings(@Param('id') id: number) {
        const value = search(id);
        console.log(">" + sorted.length);
        if (value < 0) { 
          return "";
        }
        let best1Val="", best2Val="", best3Val="";
        let best1=-1, best2=-1, best3=-1;
        for (let i=0; i < sorted.length; i++) {
          let check = matchWeight(i, best1, best1Val);
          if (check >= 0 && (check < best1 || best1 < 0)) {
              best1 = i;
              best1Val = sorted[i].product_name;
          }
          else {
            check = matchWeight(i, best2, best2Val);
            if (check >= 0 && (check < best2 || best2 < 0)) {
                best2 = i;
                best2Val = sorted[i].product_name;
            }
            else {
                check = matchWeight(i, best3, best3Val);
                if (check >= 0 && (check < best3 || best3 < 0)) {
                    best3 = i;
                    best3Val = sorted[i].product_name;
                }
            }
          }
        }
        return best1 + "," + best2 + "," + best3;
    }
}
