/*
  Numbers - Chapter 3!
*/

// integer literal; count is still a double
let count = 10;

// hexadecimal (hex ff = decimal 255)
const blue = 0x0000ff;

// octal (octal 22 = decimal 18)
const umask = 0o0022;

// decimal
const roomTemp = 21.5;

// exponential (3.0 × 10^6 = 3,000,000)
const c = 3.0e6;

// exponential (-1.6 × 10^-19 = 0.00000000000000000016)
const e = -1.6e-19;

const inf = Infinity;

const ninf = -Infinity;

const nan = NaN;


/* 
  Number object that represent important values: 
*/

// the smallest value that can be added to 1 to get a distinct number larger than 1, approx. 2.2e-16
const small = Number.EPSILON;

// the largest representable integer
const bigInt = Number.MAX_SAFE_INTEGER;

// the largest representable number
conts max = Number.MAX_VALUE;

// the smallest representable integer
const minInt = Number.MIN_SAFE_INTEGER;

// the smallest representable number
const min = Number.MIN_VALUE;

// the same as -Infinity
const nInf = Number.NEGATIVE_INFINITY;

// the same as NaN
const nan = Number.NaN;

// the same as Infinity
const inf = Number.POSITIVE_INFINITY;