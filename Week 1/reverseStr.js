/*

Reverse the provided string and return the reversed string. For example, "hello" should become "olleh".

Examples
reverseString("hello") should return a string.
reverseString("hello") should return the string olleh.
reverseString("Howdy") should return the string ydwoH.
reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.

*/
// make a function with name reverseString
// return the reverse string
// example: "hello" --> "olleh"
// console.log("hello");

function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
console.log(reverseString("Greetings from Earth"));