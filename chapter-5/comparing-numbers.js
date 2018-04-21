
// NaN is not equal to anything, including itself
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false

const x = NaN;
console.log(isNaN(x)); // true


// will run a infinite loop
// let n = 0;
// while(true) {
//   n += 0.1;
//   if(n === 0.3) break; // n = 0.30000000000000004
// }
// console.log(`Stopped at ${n}`);


// Number.EPSILON
let m = 0;
while(true) {
  m += 0.1;
  if(Math.abs(m - 0.3) < Number.EPSILON) break;
}
console.log(`2º: Stopped at ${m}`);