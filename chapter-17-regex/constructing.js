
const input = "As I was going to Saint Ives";

const re = /\w{3,}/ig;
const re1 = /going/;
const re2 = new RegExp("going");

console.log(input.match(re));
// [ 'was', 'going', 'Saint', 'Ives' ]

console.log(input.search(re));
// 5 (the first three-letter word starts at index 5)

// console.log(re.test(input));
// true (input contains at least one three-letter word)

console.log(re.exec(input));
// [ 'was', index: 5, input: 'As I was going to Saint Ives' ] (first match)

console.log(re.exec(input));
// [ 'going', index: 9, input: 'As I was going to Saint Ives' ] (exec "remembers" where it is)

console.log(re.exec(input));
// [ 'Saint', index: 18, input: 'As I was going to Saint Ives' ]

console.log(re.exec(input));
// [ 'Ives', index: 24, input: 'As I was going to Saint Ives' ]

console.log(re.exec(input));
// null -- no more matches


// note that any of these methods can be used directly with a regex literal

console.log(input.match(/\w{3,}/ig));
//  'was', 'going', 'Saint', 'Ives' ]

console.log(input.search(/\w{3,}/ig));
// 5

console.log(/\w{3,}/ig.test(input));
// true

console.log(/\w{3,}/ig.exec(input));
// [ 'was', index: 5, input: 'As I was going to Saint Ives' ]


// Replacing with RegExp

const output = input.replace(/\w{4,}/ig, '****');
console.log(output);
// As I was **** to **** ****