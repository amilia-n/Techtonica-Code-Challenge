/*
Task 1
Add a property to each friend storing their initials and 
calculates the sum of all ages to use in calculation of average age. 
An average is the total of Ages divide for how many friends 
 PSEUDO:
 initial = firstname[0] + lastname[0]
 totalAge

function initAndSum(friends){
    let totalAge = friend.reduce(function(acc, friend) {
       let initials = friend.firstname[0] + friend.lastname[0];
       friend.initials = initials;
       return friend.age;
    }, 0)
    return totalAge;
    }

Task 2
Gets an array of all friends older than the average age
 PSEUDO:
 1. loop through arr and check age against average age
 2. initiate an array

 function olderFriends(friends, totalAge) {
 let averageAge = totalAge / friends.length;
 return friends,filter(function(friend) {
 return friend.age > averageAge
});
 }

Task 3
Gets an array of strings listing the initials and age
Expected output: [ 'AB: 35', 'SW: 45', 'AE: 38', 'IH: 46' ]
 PSEUDO:
 1. arr of strings with inital and age
 2. look through friends for friend.initial + friend.age

 function initAndAge(friends){
 return friends.map(function(friend) {
    return friend.initials + ":" + friend.age;
 });
 }

Bonus
How you can work in this programmatically (using a function)
function bonusTask(friends) {
let totalAge = initAndSum(friends);
let oldFriends = olderFriends(friends, totalAge);
let initAge = initAndAge(friends);
return initAge;
}
*/

const myFriends = [
    { firstname: 'Isma', lastname: 'Kirby', age: 27 },
    { firstname: 'Aaliya', lastname: 'Becker', age: 35 },
    { firstname: 'Adnaan', lastname: 'Tang', age: 22 },
    { firstname: 'Rafi', lastname: 'Pearson', age: 29 },
    { firstname: 'Eshaal', lastname: 'Gould', age: 29 },
    { firstname: 'Scarlett', lastname: 'Whitehead', age: 45 },
    { firstname: 'Arslan', lastname: 'Esparza', age: 38 },
    { firstname: 'Isla-Mae', lastname: 'Hastings', age: 46 },
    { firstname: 'Eamonn', lastname: 'Vang', age: 21 },
    { firstname: 'Haya', lastname: 'Mcdougall', age: 31 },
];

function initAndSum(friends){
    let totalAge = friend.reduce(function(acc, friend) {
       let initials = friend.firstname[0] + friend.lastname[0];
       friend.initials = initials;
       return friend.age;
    }, 0)
    return totalAge;
}

function olderFriends(friends, totalAge) {
    let averageAge = totalAge / friends.length;
    return friends.filter(function(friend) {
    return friend.age > averageAge
    });
}

function initAndAge(friends){
    return friends.map(function(friend) {
       return friend.initials + ":" + friend.age;
    });
}

function bonusTask(friends) {
    let totalAge = initAndSum(friends);
    let oldFriends = olderFriends(friends, totalAge);
    let initAge = initAndAge(oldFriends);
    return initAge;
}
   
let result = bonusTask(myFriends);
console.log(result);