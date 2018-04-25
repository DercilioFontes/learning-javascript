
// function declaration
function sayHello() {
  console.log("Hello world!");
  console.log("¡Hola mundo!");
  console.log("Hallo wereld!");
  console.log("Привет мир!");
}

sayHello();

// return value
function getGreeting() {
  return "Hello world!";
}

console.log(getGreeting());


function getGreetings() {
  return ["Hello world!", "¡Hola mundo!", "Hallo wereld!", "Привет мир!"];
}

console.log(getGreetings());
console.log(getGreetings);

// assign to a variable
const f = getGreeting;
console.log(f());

// assign to an object property
const o = {};
o.f = getGreeting;
console.log(o.f());

// add to an array
const arr = [1, 2, 3];
arr[1] = getGreeting;
console.log(arr[1]());


// # Function Arguments

// formal arguments
function avg(a, b) {
  return (a + b)/2;
}

// actual arguments
console.log(avg(5, 10));

const a = 5, b = 10;
console.log(avg(a, b));


function f2(x) {
  console.log(`inside f2: x=${x}`);
  x = 5;
  console.log(`inside f2: x=${x} (after assignment)`);
}

let x = 3;
console.log(`before calling f2: x=${x}`);
f2(x);
console.log(`after calling f2: x=${x}`);


function f3(o2) {
  o2.message = `set in f3 (previous value: '${o2.message}')`;
}
let o2 = {
  message: "initial value"
};
console.log(`before calling f3: o2.message="${o2.message}"`);
f3(o2);
console.log(`after calling f3: o2.message="${o2.message}"`);


function f4(o3) {
  o3.message = "set in f4";
  o3 = {
    message: "new object!"
  };
  console.log(`inside f4: o3.message="${o3.message}" (after assignment)`);
}

let o3 = {
  message: 'inicial value'
};
console.log(`before calling f4: o3.message="${o3.message}"`);
f4(o3);
console.log(`after calling f4: o3.message="${o3.message}"`);

function f5(x) {
  return `in f5: x=${x}`;
}
console.log(f5());