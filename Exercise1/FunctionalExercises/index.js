/**
 * Write a JavaScrip program to find the most frequent item
 * of an array.
 * Sample array: let arr 1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
 * Sample output: a (5 times)
 */

let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function findMostFrequent(arr){
    let values = {};
    arr.map((val) => {
        return val in values ? values[val] += 1 : values[val] = 1;  
    });
    return Object.keys(values).
        reduce((prevKey, actKey) => {
            return values[prevKey] > values[actKey] ? `${prevKey}: ${values[prevKey]}` : `${actKey}: ${values[actKey]}`
        });
}

// console.log(findMostFrequent(arr1));


/**
 * Write a JavaScript program to find the sum of squares of a numeric vector.
 * Sample array: let arr1 = [0, 1, 2, 3, 4]
 * Sample output: 30
 */

// let arr1 = [0, 1, 2, 3, 4]

// function sumSquares(numbers) {
//     return numbers.reduce((total, n) => {
//         return total + n ** 2;
//     }, 0);
// }

// console.log(sumSquares(arr1));


/**
 * Write a JavaScript function to remove 'null', '0', 'false', 'undefined', and 'NaN'
 * values from an array.
 * Sample array: let arr1 = [Nan, 0, 15, false, -22, '', undefined, 47, null]
 * Expected result: [15, -22, 47]
 */

//  let arr1 = [NaN, 0, 15, false, -22, '', undefined, 47, null]

//  function cleanArray(arr) {
//     return arr.filter((elem) => elem);
//  }

//  console.log(cleanArray(arr1));

/**
 * Working with emojis
 * Primal: '🐮', '🥔', '🐔', '🌽'
 * Cooked: '🍔', '🍟', '🍿', '🍗'
 * Status after eat: 🤤
 */

let primal = ['🐮', '🥔', '🐔', '🌽'];

// Cook primal
function cookPrimal(primal) {
    return primal.map((elem) => {
        if (elem == '🐮') {return '🍔'}
        if (elem == '🥔') {return '🍟'}
        if (elem == '🐔') {return '🍿' }
        if (elem == '🌽') {return '🍗'}
    });
}

// Filter vegetarian
function getVegetarianFood(cookedFood) {
    return cookedFood.filter((food) => {
        if (food != '🍔' && food != '🍗') {return food}
    });
}

// Filter food with meat
function getFoodWithMeat(cookedFood) {
    return cookedFood.filter((food) => {
        if (food != '🍟' && food != '🍿') {return food}
    });
}

// Eat cooked food
function eatFood(cookedFood) {
    return cookedFood.reduce((status, food) => {
        status = '🤤' 
        return food = status;
    });
}

const cookedFood = cookPrimal(primal);

console.log(cookedFood);
console.log(getVegetarianFood(cookedFood));
console.log(getFoodWithMeat(cookedFood));
console.log(eatFood(cookedFood));