/**
 * I have an Array that always has 2 repeated elements
 * except for one. I want to find the element that is
 * not repeated.
 * 
 * Sample array: let arr1 = [1, 2, 4, 7, 4, 2, 1]
 * Sample output: 7
 */

let arr1 = [1, 2, 4, 7, 4, 2, 1]

function findUniqueElement(arr){

    let values = arr.reduce((obj, val) => {
        obj[val] ? obj[val] ++ : obj[val] = 1
        return obj;
    }, {});

    return Object.keys(values).
            reduce((prevKey, actKey) => {
                return values[prevKey] < values[actKey] ? prevKey : actKey;
            });
}

console.log(findUniqueElement(arr1));