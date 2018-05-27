
// indexOf and lastIndexOf
const o = { name: "Jerry" };
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];

console.log(arr.indexOf(5)); // 1
console.log(arr.lastIndexOf(5)); // 5
console.log(arr.indexOf("a")); // 2
console.log(arr.lastIndexOf("a")); // 2

console.log(arr.indexOf({ name: "Jerry" })); // -1
console.log(arr.indexOf(o)); // 3

console.log(arr.indexOf([1, 2])); // -1
console.log(arr.indexOf("9")); // 7
console.log(arr.indexOf(9)); // -1

console.log(arr.indexOf("a", 5)); // -1
console.log(arr.indexOf(5, 5)); // 5
console.log(arr.lastIndexOf(5, 4)); // 1
console.log(arr.lastIndexOf(true, 3)); // -1


// findIndex and find
const arr2 = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }];
console.log(arr2.findIndex(o => o.id === 5)); // 0
console.log(arr2.findIndex(o => o.name === "Francis")); // 0
console.log(arr2.findIndex(o => o === 3)); // -1
console.log(arr2.findIndex(o => o.id === 17)); // -1

console.log(arr2.find(o => o.id === 5)); // { id: 5, name: 'Judith' }
console.log(arr2.find(o => o.id === 2)); // undefined


const arr3 = [1, 17, 16, 5, 4, 16, 10, 3, 49];
console.log(arr3.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x)))); // 4