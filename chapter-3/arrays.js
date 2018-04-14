
const a1 = [1, 2, 3, 4];          // array containing numbers

console.log(a1);

const a2 = [1, 'two', 3, null];   // array containing mixed types

console.log(a2);

const a3 = [                      // array on multiple lines
  "What the hammer?  What the chain?",
    "In what furnace was thy brain?",
    "What the anvil?  What dread grasp",
    "Dare its deadly terrors clasp?",
];

console.log(a3);

const a4 = [                      // array containing objects
  { name: "Ruby", hardness: 9 },
  { name: "Diamond", hardness: 10 },
  { name: "Topaz", hardness: 8 },
];

console.log(a4);

const a5 = [                      // array containing arrays
  [1, 3, 5],
  [2, 4, 6],
];

console.log(a5);

const arr = ['a', 'b', 'c'];

console.log(arr.length); // 3
console.log(arr[0]);
console.log(arr.length - 1);

const arr2 = [1, 2, 'c', 4, 5];
arr2[2] = 3; // arr is now [1, 2, 3, 4, 5]
console.log(arr2);