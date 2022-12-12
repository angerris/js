// The name of JavaScript

let question = prompt("What is the “official” name of JavaScript?");

question == "ECMAScript"
  ? alert("Right!")
  : alert("You don’t know? ECMAScript!");

//Show the sign

let getNumber = prompt("Enter a number please");

if (getNumber > 0) {
  alert("1");
} else if (getNumber < 0) {
  alert("-1");
} else if (getNumber == 0) {
  alert("0");
}

// Rewrite 'if' into '?'

let result;

if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}

//
a + b < 4 ? (result = "Below") : (result = "Over");

//rewrite if/else into ?
// let message;

if (login == "Employee") {
  message = "Hello";
} else if (login == "Director") {
  message = "Greetings";
} else if (login == "") {
  message = "No login";
} else {
  message = "";
}

//
let message =
  login == "EMployee"
    ? (message = "hello")
    : login == "director"
    ? (message = "greetings")
    : login == ""
    ? (message = "no login")
    : (message = "");
