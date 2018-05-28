
const arr = [5, 7, 12, 15, 17];
console.log(arr.some(x => x%2===0)); // true
console.log(arr.some(x => Number.isInteger(Math.sqrt(x)))); // false

const arr2 = [4, 6, 16, 36];
console.log(arr2.every(x => x%2===0)); // true
console.log(arr2.every(x => Number.isInteger(Math.sqrt(x)))); // false