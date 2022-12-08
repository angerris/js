// Write a function ucFirst(str) that returns the string str with the uppercased first character
function ucFirst() {
  ucFirst = "john";
  console.log(ucFirst[0].toUpperCase() + ucFirst.slice(1));
}
ucFirst();

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
function checkSpam(str) {
  str = "buy ViAgRa now free xxx";
  console.log(str.toLowerCase().includes("viagra"));
  console.log(str.toUpperCase().includes("XXX"));
}
checkSpam();

// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
function truncate() {
  let string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  let maxlength = 30;
  if ((string.lenght = maxlength))
    console.log(string.slice(0, maxlength) + "...");
}
truncate();
