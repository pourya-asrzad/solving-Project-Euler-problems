let sum = 0;
let sum2 = 0;
function getSquares(i) {
  const squares = i ** 2;
  sum += squares;
  console.log("last answer getSquares:  " + sum);
}
function squareOfSum(num) {
  sum2 += num;
  let sumsquer = sum2 ** 2;
  console.log("last answer squareOfSum:  " + sumsquer);
}
for (let i = 1; i < 101; i++) {
  getSquares(i);
  squareOfSum(i);
  console.log(i);
}
