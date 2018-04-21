
// Increment doesn't happen
// with OR
const skipIt = true;
let x = 0;
const resultX = skipIt || x++;
console.log(resultX); // true
console.log(x); // 0

// with AND
const doIt = false;
let y = 0;
const resultY = doIt && y++;
console.log(resultY); // false
console.log(y); // 0

// Increment happens
// with OR
const skipIt2 = false;
let x2 = 0;
const resultX2 = skipIt2 || x2++;
console.log(resultX2); // 0
console.log(x2); // 1

// with AND
const doIt2 = true;
let y2 = 0;
const resultY2 = doIt2 && y2++;
console.log(resultY2); // 0
console.log(y2); // 1