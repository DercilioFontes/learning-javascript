
const arr = ["b", "c", "d"];
console.log(arr.push("e")); // 4 -> new length 
console.log(arr.pop()); // e
console.log(arr.unshift("a")); // 4 -> new length
console.log(arr.shift()); // a


const arr2 = [1, 2, 3];
console.log(arr2.concat(4, 5, 6)); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr2); // [ 1, 2, 3 ]

console.log(arr2.concat([4, 5, 6]));
console.log(arr2.concat([4, 5], 6));
console.log(arr2.concat([4, [5, 6]]));