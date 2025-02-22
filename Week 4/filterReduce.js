/*
Task 1 - Using filter to Extract Specific Elements
Write a JavaScript function that uses the filter method to 
extract all the numbers greater than 10 from an array.

const arrayNums = [5, 10, 12, 3, 18, 130, 44];
PSEUDO:
function greaterThanTen()
filter method to extract all num > 10 from the array
SYNTAX: filter(callbackFn)
Para: arr
Return: array of # > 10
*/
function greaterThanTen(num) {
    return num >= 10;
}
const arrayNums = [5, 10, 12, 3, 18, 130, 44];
console.log(arrayNums.filter(greaterThanTen));

/*
Task 2 - Using reduce to Calculate the Sum of Numbers
Write a JavaScript function that uses the reduce method to 
calculate the sum of all numbers in an array.

function sumNumbers(){}

PSEUDO:
reduce method to calculate sum of numbers in an array
SYTAX: reduce(callbackFn, initialValue)
using function sumNumbers(){}
2 Para: accumulator, currentValue
Test case: const array1 = [1, 2, 3, 4];

*/
function sumNumbers(accumulator, currentValue){
    return accumulator + currentValue;
}
const array1 = [1, 2, 3, 4];
console.log(array1.reduce(sumNumbers));

/*
Task 3 - Create an Array of Unique Categories for a Restaurant Menu (reduce)
Extract unique categories from a list of menu items.

PSEUDO: create a NEW array of unique catagories
extracted using reduce
if statement checking if catagory is the same as last, if so push into new array
*/
const menuItems = [
    { name: 'Pizza', category: 'Main Dish' },
    { name: 'Salad', category: 'Main Dish' },
    { name: 'Pasta', category: 'Main Dish' },
    { name: 'Caesar Salad', category: 'Salad' },
    { name: 'Greek Salad', category: 'Salad' },
]
function uniqueCat(menuItems, newArr) {
    if (menuItems.category.indexOf !== -1) {
       return newArr.push;
    }
}

console.log(menuItems.reduce(uniqueCat));

/*
Task 4 - Count Coffee Shops by Neighborhood (filter)
Imagine you collected data on various coffee shops in Chicago, including their neighborhoods. 
You want to analyze this data to understand the distribution of coffee shops across diff neighborhoods.

const coffeeShops = [
 { name: 'Cafe A', neighborhood: 'Rogers Park' },
 { name: 'Cafe B', neighborhood: 'Wicker Park' },
 { name: 'Cafe C', neighborhood: 'Rogers Park' },
 { name: 'Cafe D', neighborhood: 'Wicker Park' },
 { name: 'Cafe E', neighborhood: 'Rogers Park' },
];
*/
