
// slice
const arr = [1, 2, 3, 4, 5];

console.log(arr.slice(3)); // [4, 5]
console.log(arr); // [ 1, 2, 3, 4, 5 ]

console.log(arr.slice(2, 4)); // [ 3, 4 ]
console.log(arr.slice(-2)); // [ 4, 5 ]
console.log(arr.slice(1, -2)); // [ 2, 3 ]
console.log(arr.slice(-2, -1)); // [ 4 ]

console.log(arr); // [ 1, 2, 3, 4, 5 ]

// splice
const arr2 = [1, 5, 7];
console.log(arr2.splice(1, 0, 2, 3, 4)); // []
console.log(arr2); // [1, 2, 3, 4, 5, 7]

arr2.splice(5, 0, 6);
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7]

arr2.splice(1, 2);
console.log(arr2); // [ 1, 4, 5, 6, 7 ]

arr2.splice(2, 1, 'a', 'b');
console.log(arr2); // [ 1, 4, 'a', 'b', 6, 7 ]