/*
The HackerRank challenge titled "Loops" focuses on understanding loops in JavaScript, 
specifically for, while, and do...while loops. 
Each type of loop has its own syntax and use cases, and mastering them is essential 
for writing efficient and readable code. 
Below, I'll provide solutions for problems typically encountered in such challenges, 
including examples of each loop type.
*/

// Problem 1: Print Numbers from 1 to N
// Task: Print numbers from 1 to N.
function printToN(N){
    for(let i=1; i <= N; i++) {
        console.log(i);
    }
  }
  printToN(10);

// Problem 2: Print Even Numbers from N to 1
// Task: Print even numbers from N to 1.
function evenNumFromN(N) {
    while(N > 1) {
        N--;
    if(N%2 == 0){
        console.log(N);
    }
    }
}
evenNumFromN(11);

// Problem 3: Count Down and Up with Jump
// Task: Count down from N to 1 with a jump of J, and count up from 1 to N with a jump of J.
// PSEUDO: 
// WHILE (N >1); DO Count N-= J 
// THEN
// for(let i=1; i <= N; i+=J)
function questionThree(N, J) {
    do{
        N-=J;
        console.log(N);
    } while (N > 1);
    for(let i=1; i <= N; i+=J){
        console.log(i);
    }
}
questionThree(20, 5);