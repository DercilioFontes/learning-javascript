
function f(x) {
  return x + 3;
}

console.log(f(5));
// console.log(x); // ReferenceError: x is not defined

// Lexical vs Dynamic Scoping
function f1() {
  console.log('one');
}
function f2() {
  console.log('two');
}

f2();
f1();
f2();


const x = 3;
function f3() {
  console.log(x);
  console.log(y);
}
const y = 4;
f3();