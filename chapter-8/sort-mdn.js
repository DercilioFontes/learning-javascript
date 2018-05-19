
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

/*
If compareFunction is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in Unicode code point order. For example, "Banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in Unicode order. All undefined elements are sorted to the end of the array.
*/

/* 
If compareFunction is supplied, all non-undefined array elements are sorted according to the return value of the compare function (all undefined elements are sorted to the end of the array, with no call to compareFunction). If a and b are two elements being compared, then:

- If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
- If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behaviour, and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
- If compareFunction(a, b) is greater than 0, sort b to an index lower than a, i.e. b comes first.
- compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned then the sort order is undefined.
*/

/*
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
*/

/* 
To compare numbers instead of strings, the compare function can simply subtract b from a. The following function will sort the array ascending (if it doesn't contain Infinity and NaN):
*/
function compareNumbers(a, b) {
  return a - b;
}

/* The sort method can be conveniently used with function expressions (and closures): */

const numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]

/* Objects can be sorted given the value of one of their properties. */
const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort((a, b) => a.value - b.value);
console.log(items);
/* 
[ { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'Zeros', value: 37 },
  { name: 'And', value: 45 } ]
*/

// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if(nameA < nameB) return -1;
  if(nameA > nameB) return 1;
  return 0;
});
console.log(items);
/*
[ { name: 'And', value: 45 },
  { name: 'Edward', value: 21 },
  { name: 'Magnetic', value: 13 },
  { name: 'Sharpe', value: 37 },
  { name: 'The', value: -12 },
  { name: 'Zeros', value: 37 } ]
*/

// Creating, displaying, and sorting an array
const stringArray = ['Blue', 'Humpback', 'Beluga'];
const numericStringArray = ['80', '9', '700'];
const numberArray = [40, 1, 5, 200];
const mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log('stringArray:', stringArray.join()); // stringArray: Blue,Humpback,Beluga
console.log('Sorted:', stringArray.sort().join()); // Sorted: Beluga,Blue,Humpback

console.log('numberArray:', numberArray.join()); // numberArray: 40,1,5,200
console.log('Sorted without a compare function:', numberArray.sort().join()); 
// Sorted without a compare function: 1,200,40,5
console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers).join());
// Sorted with compareNumbers: 1,5,40,200

console.log('numericStringArray:', numericStringArray.join());
// numericStringArray: 80,9,700
console.log('Sorted without a compare function:', numericStringArray.sort().join());
// Sorted without a compare function: 700,80,9
console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers).join());
// Sorted with compareNumbers: 9,80,700

console.log('mixedNumericArray:', mixedNumericArray.join());
// mixedNumericArray: 80,9,700,40,1,5,200
console.log('Sorted without a compare function:', mixedNumericArray.sort().join());
// Sorted without a compare function: 1,200,40,5,700,80,9
console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers).join());
// Sorted with compareNumbers: 1,5,9,40,80,200,700