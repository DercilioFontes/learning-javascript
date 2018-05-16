
// x; // ReferenceError
// let x = 3;

x;
var x = 3;
console.log(x); // 3


f();
function f() {
  console.log('f');
}

f2(); // ReferenceError: f2 is not defined
let f2 = function() {
  console.log('f');
}