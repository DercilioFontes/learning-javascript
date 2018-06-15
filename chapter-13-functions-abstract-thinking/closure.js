
// https://en.wikipedia.org/wiki/Closure_(computer_programming)

function add(x) {
  function addX(y) {
    return y + x;
  }
  return addX;
}

const add1 = add(1);
const add5 = add(5);

console.log(add1(3)); // 4
console.log(add5(3)); // 8
