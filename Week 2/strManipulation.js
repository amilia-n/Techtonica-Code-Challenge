/*

Given a string inputStr containing lowercase letters and a target substring targetStr. 
Your task is to implement a function findTargetIndex(inputStr, targetStr) that returns 
the starting index of the first occurrence of targetStr in inputStr. 
If targetStr is not found in inputStr, the function should return -1.

Examples:
console.log(findTargetIndex("hello world", "lo"));  // Output: 3
console.log(findTargetIndex("programming", "abc"));  // Output: -1
console.log(findTargetIndex("javascript", "script"));  // Output: 4
console.log(findTargetIndex("challenge", "len"));  // Output: 4

Pseudo: 
(does targetStr need to be converted to lowercase?)
function findTargetIndex
2 Para: inputStr, targetStr
inputStr: lowcase letters
Return [i] of first occurence of targetStr in inputStr
if none, return -1
*/
function findTargetIndex(inputStr, targetStr) {
    return inputStr.indexOf(targetStr);
}
console.log(findTargetIndex("hello world", "lo"));  
console.log(findTargetIndex("programming", "abc"));  
console.log(findTargetIndex("javascript", "script"));  
console.log(findTargetIndex("challenge", "len"));  
