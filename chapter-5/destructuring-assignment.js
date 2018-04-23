
const obj = { b: 2, c: 3, d: 4 };

const {a, b, c} = obj;

console.log(a); // undefined: there was no property "a" in obj
console.log(b); // 2
console.log(c); // 3
// console.log(d); // reference error: "d" is not defined

const obj2 = { b2: 2, c2: 3, d2: 4 };
let a2, b2, c2;

// this produces an error:
// {a2, b2, c2} = obj2;

// this works:
({a2, b2, c2} = obj2);
console.log(a2, b2, c2);


// Array

const arr = [1, 2, 3];

// array destructuring assignment
// You can assign any names you want (in order) to the elements of the array
let [x, y] = arr;
console.log(x);
console.log(y);
// console.log(z); // error: z hasn't been defined

const arr2 = [1, 2, 3, 4, 5];

let [x2, y2, ...rest] = arr2;
console.log(x2);
console.log(y2);
console.log(rest);

// swap the values of variables

let a3 = 5, b3 = 10;
[a3, b3] = [b3, a3];
console.log(`a3: ${a3}`);
console.log(`b3: ${b3}`);