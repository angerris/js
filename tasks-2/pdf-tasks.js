// try to write a the following loop with while and do-while:
// for (var i = 0; i < a.length; i++) {
//   console.log("for", i, a[i]);
// }
let i = 0;
while (i < 5) {
  i++;
  console.log(i);
}

do {
  i++;
  console.log(i);
} while (i < 5);

//1  Given a number. Print “odd” if the number is odd and “even” if itʼs even.

let oddEven = prompt("enter a number please", 0);

if (oddEven % 2 === 0) {
  alert("even");
} else if (oddEven % 2 > 0) {
  alert("odd");
} else {
  prompt("enter a number please", 0);
}
// 2 Given two variables, which are the angles of a triangle. Find the third angle of the triangle.
let triangleSum = 180;
let firstNum = +prompt("enter first angle degree");
let secondNum = +prompt("enter second angle degree");

while (firstNum + secondNum < triangleSum) {
  alert(triangleSum - firstNum - secondNum);
  if (firstNum + secondNum < triangleSum) break;
}
//3 Given a positive integer. Bring the last digit of the numberto the beginning. Print the new number. If the
// last digit of the inserted numberis 0, numberremains the same.
function toEndFirst() {
  toEndFirst = "3436";
  let newArr = Array.from(toEndFirst);
  if (toEndFirst.slice(-1) == 0) {
    console.log(toEndFirst);
  } else {
    newArr.push(toEndFirst[0]);
    console.log(newArr.join("").toString().slice(1));
  }
}
toEndFirst();

//4 Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
let ifMultiple = prompt("enter a number please", 0);
let three = 3;
let five = 5;
let seven = 7;
if (ifMultiple % three === 0) {
  alert(`${ifMultiple} ` + "is a multiple of 3");
} else if (ifMultiple % five === 0) {
  alert(`${ifMultiple} ` + "is a multiple of 5");
} else if (ifMultiple % seven === 0) {
  alert(`${ifMultiple} ` + "is a multiple of 7");
} else if (isNaN(ifMultiple)) {
  prompt("enter a number please", 0);
} else if (ifMultiple % three || five || seven > 0) {
  alert("number is not a multiple of 3,5 or 7");
}
// 5 Given three numbers. Sort them by the ascending order.

let newArr = [46, 26, 78];
let arr = [23, -456, 0];
console.log(newArr, arr);

newArr.sort(compareFunction);
arr.sort(compareFunction);
console.log(newArr, arr);

function compareFunction(a, b) {
  return a - b; //??
}

// 8 Enter a number. Reverse its first and last digits. Print the new number.
function reverse() {
  reverse = "895796";
  let newArr = Array.from(reverse);
  newArr.shift([1]);
  newArr.pop([reverse.length - 1]);
  newArr.unshift(reverse[reverse.length - 1]);
  newArr.push(reverse[0]);
  console.log(newArr.join("").toString());
}
reverse();

// 9 Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.
let n = prompt("enter a number");
if (n % 2 > 0 && n > 1) {
  alert("yes");
} else {
  alert("no");
}
// 12 Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words
// from the array.

let firstStr = "_, we have a _.";
let firstArr = ["Houston", "problem"];
let prosto1 = firstStr.replace(/_/, firstArr[0]);
let prosto2 = prosto1.replace(/_/, firstArr[1]);
console.log(prosto2);

let secondStr = "If at _ you donʼt _, try, try _.";
let secondArr = ["first", "succeed", "again"];
let prosto3 = secondStr.replace(/_/, secondArr[0]);
let prosto4 = prosto3.replace(/_/, secondArr[1]);
let prosto5 = prosto4.replace(/_/, secondArr[2]);
console.log(prosto5);

let thirdStr = "May the _ _ _ _.";
let thirdArr = ["Force", "be", "with", "you"];
let prosto6 = thirdStr.replace(/_/, thirdArr[0]);
let prosto7 = prosto6.replace(/_/, thirdArr[1]);
let prosto8 = prosto7.replace(/_/, thirdArr[2]);
let prosto9 = prosto8.replace(/_/, thirdArr[3]);
console.log(prosto9);

//17 Given a sentence as a string. Split it according to space and comma and create an array consisting of the
// words of the array.
function splitSentence() {
  let stupidStr = "May the Force be with you.";
  let secondStupidStr = "Keep your friends close, but your enemies closer.";
  let firstArr = stupidStr.split(" ");
  let secondArr = secondStupidStr.split(" ");
  let prosto = Array.from(firstArr);
  let prosto2 = Array.from(secondArr);
  console.log(secondArr);
  console.log(firstArr);
}
splitSentence();
//19. Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
// row and print them as an array.

function firstArraySum() {
  let myArray = [
    [3, 4, 5],
    [1, 0, 0],
    [4, 5, 4],
    [8, 8, -1],
  ];
  let myNewArray = [];
  myNewArray.push(myArray[0][0] + myArray[0][1] + myArray[0][2]);
  myNewArray.push(myArray[1][0] + myArray[1][1] + myArray[1][2]);
  myNewArray.push(myArray[2][0] + myArray[2][1] + myArray[2][2]);
  myNewArray.push(myArray[3][0] + myArray[3][1] + myArray[3][2]);
  console.log(myNewArray);
}
firstArraySum();

function secondArraySum() {
  let myArray = [[8, 35, 2], [8], [5, 6, -5, -6], [1, 3, -9, 0, -1]];
  let myNewArray = [];
  myNewArray.push(myArray[0][0] + myArray[0][1] + myArray[0][2]);
  myNewArray.push(myArray[1][0]);
  myNewArray.push(
    myArray[2][0] + myArray[2][1] + myArray[2][2] + myArray[2][3]
  );
  myNewArray.push(
    myArray[3][0] +
      myArray[3][1] +
      myArray[3][2] +
      myArray[3][3] +
      myArray[3][4]
  );
  console.log(myNewArray);
}
secondArraySum();

function thirdArray() {
  let myArray = [[1], [2], [3], [4]];
  let myNewArray = [];
  myNewArray.push(myArray[0][0]);
  myNewArray.push(myArray[1][0]);
  myNewArray.push(myArray[2][0]);
  myNewArray.push(myArray[3][0]);
  console.log(myNewArray);
}
thirdArray();

//20 print the pattern
let prostoArr = ["1"];
let prosto2Arr = ["2 ", "6"];
let prosto3Arr = ["3 ", "7 ", "10"];
let prosto4Arr = ["4 ", "8 ", "11 ", "13"];
let prosto5Arr = ["5 ", "9 ", "12 ", "14 ", "15"];
console.log(prostoArr.join(""));
console.log(prosto2Arr.join(""));
console.log(prosto3Arr.join(""));
console.log(prosto4Arr.join(""));
console.log(prosto5Arr.join(""));
