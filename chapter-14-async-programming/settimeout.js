
console.log("Before timeout: " + new Date());

function f() {
  console.log("After timeout: " + new Date());
}

setTimeout(f, 30*1000);
console.log("I happen after setTimeout!");
console.log("Me too!");