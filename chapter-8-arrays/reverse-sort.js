
const arr = [1, 2, 3, 4, 5];

arr.reverse(); 
console.log(arr); // [ 5, 4, 3, 2, 1 ]

arr.sort();
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// 
const arr2 = [ 
  { name: "Suzanne" }, { name: "Jim" }, 
  { name: "Trevor" }, { name: "Amanda" }
];

console.log(arr2.sort()); // same arr

// arr sorted alphabetically by name property
arr2.sort((a, b) => a.name > b.name);
console.log(arr2); // [ { name: 'Amanda' }, { name: 'Jim' }, { name: 'Suzanne' }, { name: 'Trevor' } ]

// arr sorted reverse alphabetically by second letter of name property
arr2.sort((a, b) => a.name[1] < b.name[1]);
console.log(arr2); // [ { name: 'Suzanne' }, { name: 'Trevor' }, { name: 'Amanda' }, { name: 'Jim' } ]