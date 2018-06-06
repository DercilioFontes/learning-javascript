
function* rainbow() {
  yield 'red';
  yield 'orange';
  yield 'yellow';
  yield 'green';
  yield 'blue';
  yield 'indigo';
  yield 'violet';
}

const it = rainbow();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); 

/* 
  { value: 'red', done: false }
  { value: 'orange', done: false }
  { value: 'yellow', done: false }
  { value: 'green', done: false }
  { value: 'blue', done: false }
  { value: 'indigo', done: false }
  { value: 'violet', done: false }
  { value: undefined, done: true }
  { value: undefined, done: true }
*/

for(let color of rainbow()) {
  console.log(color);
}
/* 
  red
  orange
  yellow
  green
  blue
  indigo
  violet
*/

function* interrogate() {
  const name = yield "What is your name?";
  const color = yield "What is your favorite color?";

  return `${name}'s favorite color is ${color}.`;
}

const it2 = interrogate();
console.log(it2.next().value); // What is your name?
console.log(it2.next('Ethan').value); // What is your favorite color?
console.log(it2.next('orange').value); // Ethan's favorite color is orange.


function* abc() {
  yield 'a';
  yield 'b';
  return 'c';
}

const it3 = abc();
console.log(it3.next().value); // a
console.log(it3.next().value); // b
console.log(it3.next().value); // c

for(let l of abc()) {
  console.log(l);
}
/* 
  a
  b
*/
