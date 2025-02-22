// Sorting an Array of Objects by a Key [Sort]

// sort(<comparison function (a, b)>)
// The comparison function should return
// a negative value if a should come before b, 
// a positive value if a should come after b, 
// or zero if a and b are equal.

const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
   ];

users.sort((a, b) => {
    if(a.age < b.age) {
        return -1;
    }
    if(a.age > b.age) {
        return 1;
    }
    return 0;
});

console.log(users);
   
   
   
    // Checking if Any Element in an Array Meets a Condition [Some]
    // some() tests if at least 1 element passes the function condition w/ T/F
    const numbers = [1, 2, 3, 4, 5];
    const condition = numbers.some(number => number > 6);
    console.log(condition);
   
   
   // Checking if All Elements in an Array Meet a Condition [Every]
   // every() checks whether all elements in an array passes, return T/F
   const evenNumbers = [2, 4, 6, 8, 10];
   const conditionArr = evenNumbers.every(number => number % 2 ===0);
   console.log(conditionArr); 