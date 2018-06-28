
function sum(arr, f) {
  if(typeof f != 'function') f = x => x;
  return arr.reduce((a, x) => a += f(x), 0);
}

const one = sum([1, 2, 3]);
const two = sum([1, 2, 3], x => x*x);
const three = sum([1, 2, 3], x => Math.pow(x, 3));

console.log(one); // 6
console.log(two); // 14
console.log(three); // 36


function newSummer(f) {
  return arr => sum(arr, f);
}

const sumOfSquares = newSummer(x => x*x);
const sumOfCubes = newSummer(x => Math.pow(x, 3));

const four = sumOfSquares([1, 2, 3]);
const five = sumOfCubes([1, 2, 3]);

console.log(four);
console.log(five);