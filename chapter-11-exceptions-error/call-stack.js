
function a() {
  console.log('a: calling b');
  b();
  console.log('a: done');
}

function b() {
  console.log('b: calling c');
  c();
  console.log('b: done');
}

function c() {
  console.log('c: throwing error');
  throw new Error('c error');
  console.log('c: done');
}

function d() {
  console.log('d: calling c');
  c();
  console.log('d: done');
}

try {
  a();
} catch(err) {
  console.log(err.stack);
}
/*
  a: calling b
  b: calling c
  c: throwing error
  Error: c error
*/

try {
  d();
} catch(err) {
  console.log(err.stack);
}
/*
  d: calling c
  c: throwing error
  Error: c error
*/