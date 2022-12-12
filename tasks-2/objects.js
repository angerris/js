// Hello, object

let user = {
  name: "John",
  surname: "Smith",
};
console.log(user);
user.name = "Pete";
console.log(user);

delete user.name;
console.log(user);

//Sum object properties

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sum() {
  if (Object.keys(salaries).length === 0) {
    console.log("0");
  } else {
    console.log(salaries.John + salaries.Ann + salaries.Pete);
  }
}
sum();
