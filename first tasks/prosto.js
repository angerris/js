let digit = 455;
if (digit === 0) console.log("cannot calculate");
let sum = digit
  .toString()
  .split("")
  .map(Number)
  .reduce(function (a, b) {
    return a + b;
  });
let prod = digit
  .toString()
  .split("")
  .map(Number)
  .reduce(function (a, b) {
    return a * b;
  });
if (prod % sum == 0) {
  console.log(`quotient is ${prod / sum}`);
} else if (prod % sum > 0) {
  console.log(`remainder is ${prod % sum}`);
}
