
function findNeedle(haystack) {
  if(haystack.length === 0) return "no haystack here!";
  if(haystack.shift() === 'needle') return "found it!";
  return findNeedle(haystack);
}

const x = findNeedle(['hay', 'hay', 'hay', 'hay', 'needle', 'hay', 'hay']);

console.log(x); // found it!

function fact(n) {
  if(n === 1) return 1;
  return n * fact(n - 1);
}

console.log(fact(4));