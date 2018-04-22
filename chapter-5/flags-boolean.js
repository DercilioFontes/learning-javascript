
const FLAG_EXECUTE = 1; // 0b001
const FLAG_WRITE = 2;   // 0b010
const FLAG_READ = 4;    // 0b100

let p = FLAG_READ | FLAG_WRITE; // 0b110
let hasWrite = p & FLAG_WRITE; // 0b010 - truthy
let hasExecute = p & FLAG_EXECUTE; // 0b000 - falsy
p = p ^ FLAG_WRITE; // 0b100 -- toggle write flag (now off)
p = p ^ FLAG_WRITE; // 0b101 -- toggle write flag (now on)

let mask = FLAG_READ | FLAG_EXECUTE; // 0b101
const hasReadAndExecute = (p & mask) === mask;

console.log(hasReadAndExecute);