/*
reduce -push, pop, shift, unshift

Write a function that takes an array of strings and a string item as input. 
The function should remove the first occurrence of item from the array and 
then add it to the end of the array. 
You must use both shift and push methods to achieve this.

PSEUDO:
function takes strArr
create var with shift method to remove from beginning 
use push method to add to end of array

*/
const newArr = (strArr) => {let shift = strArr.shift()
    console.log(shift);
    return shift.push(strArr);
}
const strArr = ["ABC","DEF","GHI"];

console.log(newArr(strArr));


/*

Write a function that takes an array of numbers as input and 
returns a new array with all duplicate numbers removed. 
You must use reduce and push methods to achieve this.

*/