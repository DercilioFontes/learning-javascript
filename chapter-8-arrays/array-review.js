
const arr1 = [1, 2, 3]; // array of numbers
const arr2 = ["one", 2, "three"];
const arr3 = [[1, 2, 3], ["one", 2, "three"]];
const arr4 = [
  { name: "Fred", type: "object", luckyNumbers: [5, 7, 13] },
  [
    { name: "Susan", type: "object" },
    { name: "Antony", type: "object" },
  ],
  1,
  function() { return "arrays can contain functions too"; },
];

console.log(arr1[0]);
console.log(arr1[2]);
console.log(arr3[1]);
console.log(arr4[1][0]);

console.log(arr1.length);
console.log(arr4.length);
console.log(arr4[1].length);

arr1[4] = 5;
console.log(arr1);
console.log(arr1.length);

console.log(arr2[10]); // undefined
console.log(arr2.length);

const arr5 = new Array();
const arr6 = new Array(1, 2, 3);
const arr7 = new Array(2);
const arr8 = new Array("2");

console.log(arr5);
console.log(arr6);
console.log(arr7);
console.log(arr8);