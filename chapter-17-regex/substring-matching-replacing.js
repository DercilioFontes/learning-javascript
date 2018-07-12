
const input = "As I was going to Saint Ives";

console.log(input.startsWith("As"));
// true
console.log(input.startsWith("AS"));
// false

console.log(input.endsWith("Ives"));
// true

console.log(input.startsWith("going", 9));
// true -- start at index 9

console.log(input.endsWith("going", 14));
// true -- treat index 14 as the end of the string

console.log(input.includes("going"));
// true

console.log(input.includes("going", 10));
// false -- -- starting at index 9

console.log(input.indexOf("going"));
// 9

console.log(input.indexOf("going", 10));
// -1

console.log(input.indexOf("nope"));
// -1

// case-insensitive comparison
console.log(input.toLowerCase().startsWith("as"));
// true

// replacing
const output = input.replace("going", "walking");
console.log(output);
// As I was walking to Saint Ives