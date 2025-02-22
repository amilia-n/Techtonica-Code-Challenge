/*

An anagram is a word formed by rearranging the letters of a different word using 
all the original letters exactly once. 
The function is given two strings: s - to search in, p - a template word. 
Find the starting indexes of anagrams of p among substrings of the given s.

Examples      *  s , p
findAnagrams("cbaebabacd", "abc") ➞ [0, 6]
// Anagrams: "cba", "bac"
//   *
// abc
// "abc"
// .substring(0,3) => "cba".sort() => "abc" 

// 1. sort p let sortedP = p.sort();


findAnagrams("abab", "ab") ➞ [0, 1, 2]
// Anagrams: "ab", "ba", "ab"

SYNTAX for substring() method: 
const subStr = str.substring([EXTRACT starting index] 7, [ending index] 12)

Pseudo Code: 
let ans = [];
Identify the starting position
of all substrings in strS that are anagrams of strP
console.log should output array of indexes


can we loop through strS to compare 
*/

// console.log(findAnagrams("cbaebabacd", "abc"));// [0, 6];
// console.log(findAnagrams("abab", "ab")); // [0, 1, 2];
// console.log(findAnagrams('a', 'ab')); // [];
// console.log(findAnagrams('racecar', 'ace')); 


// Pseudo: 
// find all variations of str2P in str1S, and output those [i] in an array 
// output: []
// Para: str1S, str2P

function findAnagrams(s, p) {
    const ans = [];
    // p = "bac" => "abc"
    let sortedP = p.sort();
    console.log(sortedP);

    for(let i = 0; i < s.length; i++){
        const currentSubstring = s.substring(i, i + p.length);
        console.log(currentSubstring);
        if(sortedP === currentSubstring.sort()){
            ans.push(i);
        }
    }

    return ans;
}

function getAnagrams(str) {
    let anagrams = [];
    let uniqueLetters = new Set();

    for(let c of str){

    }
}

// ami => [ami, aim, iam, ima, mai, mia]

// aim iam
// 

