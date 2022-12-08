console.log(null || 2 || undefined); //2
console.log(console.log(1) || 2 || console.log(3)); //2
console.log(1 && null && 2); //null
console.log(console.log(1) && console.log(2)); //console log1?
console.log(null || (2 && 3) || 4); //2&&3 ??
// Write an if condition to check that age is between 14 and 90 inclusively.
let age = 50;
if (age >= 14 && age <= 90) console.log("age is between 14 and 90 inclusively");

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
let userAge = 2;
if (userAge <= 14 || userAge >= 90)
  console.log("age is NOT between 14 and 90 inclusively");

if (-1 || 0) console.log("first"); //true
if (-1 && 0) console.log("second"); //false
if (null || (-1 && 1)) console.log("third"); //true
