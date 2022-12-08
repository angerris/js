// Create a script that prompts the visitor to enter two numbers and then shows their sum.
let firstNum = parseInt(prompt("enter first number"));
let secondNum = parseInt(prompt("enter second number"));
alert(firstNum + secondNum);

// Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

let readNumber = prompt("enter a number please", 0);

while (isNaN(readNumber)) {
  readNumber = prompt("enter a number please", 0);
}
if (isFinite(readNumber)) {
  alert(`Read: ${readNumber}`);
}

//This loop is infinite. It never ends. Why?

let i = 0;
while (i != 10) {
  i += 0.2;
}

//because 0 will never be = 10

// Write the function random(min, max) to generate a random floating-point number from min to max (not including max).
function randomFunction() {
  let maxNum = 5;
  console.log(Math.random() * maxNum);
}

randomFunction();

//Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.
function myRandomFunction() {
  let maxNum = 5;
  console.log(Math.floor(Math.random() * maxNum) + 1);
}

myRandomFunction();

//Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.
function extractCurrencyValue(str) {
  str = "$120";
  console.log(+str.slice(1));
}
extractCurrencyValue();
