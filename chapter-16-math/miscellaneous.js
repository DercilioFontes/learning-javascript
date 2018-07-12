
// Absolute value of x
console.log(Math.abs(-5.5));
// 5.5

console.log(Math.abs(5.5));
// 5.5

// The sign of x: if x is negative, –1; 
// if x is positive, 1; and if x is 0, 0
console.log(Math.sign(-10.5));
// -1

console.log(Math.sign(6.77));
// 1

console.log(Math.sign(0));
// 0

// The ceiling of x: 
// the smallest integer greater than or equal to x
console.log(Math.ceil(2.2));
// 3

console.log(Math.ceil(-3.8));
// -3

// The floor of x: 
// the largest integer less than or equal to x
console.log(Math.floor(2.8));
// 2

console.log(Math.floor(-3.2));
// -4

// The integral part of x (all fractional digits removed)
console.log(Math.trunc(7.7));
// 7

console.log(Math.trunc(-5.8));
// -5

// x rounded to the nearest integer
console.log(Math.round(7.2));
// 7

console.log(Math.round(7.7));
// 8

console.log(Math.round(-7.7));
// -8

console.log(Math.round(-7.2));
// -7

// Returns the minimum argument
console.log(Math.min(1, 2));
// 1

console.log(Math.min(3, 0.5, 0.66));
// 0.5

console.log(Math.min(3, 0.5, -0.66));
// -0.66

// Returns the maximum argument
console.log(Math.max(1, 2));
// 2

console.log(Math.max(3, 0.5, 0.66));
// 3

console.log(Math.max(-3, 0.5, -0.66));
// 0.5