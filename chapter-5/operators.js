
const x=5;
const y = 3 - -x; // y is 8
console.log(y);

const s = "5";
const z = 3 + +s; // y is 8; without the unary plus,
                  // it would be the result of string
                  // concatenation: "35"
console.log(z);

// using unnecessary unary pluses so that expressions line up
const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
const p1 = -x1*1;
const p2 = +x2*2;
const p3 = +x3*3;
const p4 = -x4*4;
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

// increment and decrement
let xx = 2;
const r1 = xx++ + xx++; // 2 + 3 = 5 # xx = 4
const r2 = ++xx + ++xx; // 5 + 6 = 11
const r3 = xx++ + ++xx; // 6 + 8 = 14
const r4 = ++xx + xx++; // 9 + 9 = 18 # xx = 10
console.log(r1, r2, r3, r4);

let yy = 10;
const r5 = yy-- + yy--; // 10 + 9 = 19 # yy = 8
const r6 = --yy + --yy; // 7 + 6 = 13
const r7 = yy-- + --yy; // 6 + 4 = 10 
const r8 = --yy + yy--; // 3 + 3 = 6 # yy = 2
console.log(r5, r6, r7, r8);

const n = 5;
const ss = "5";
console.log(n === s); // false -- different types
console.log(n !== s); // true
console.log(n === Number(s)); // true -- "5" converted to numeric 5
console.log(n !== Number(s)); // false
console.log(n == s); // true; not recommended
console.log(n != s); // false; not recommended

const a = { name: "an object" };
const b = { name: "an object" };
console.log(a);
console.log(a === b); // false -- distinct objects
console.log(a !== b); // true
console.log(a == b); // false; not recommended
console.log(a != b); // true; not recommended