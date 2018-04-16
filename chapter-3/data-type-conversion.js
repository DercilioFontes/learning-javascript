
// Converting to Numbers

// * The first is to use the Number object constructor:
const numStr = "33.3";
const num = Number(numStr); 
// this creates a number value, *not* an instance of the Number object

console.log(numStr); // 33.3
console.log(num); // 33.3

// **  If the string can’t be converted to a number, NaN will be returned.

// * The second approach is to use the built-in parseInt or parseFloat functions.

const a = parseInt("16 volts", 10);
console.log(a);
// the " volts" is ignored, 16 is parsed in base 10

const b = parseInt("3a", 16);
console.log(b);
// parse hexadecimal 3a; result is 58

const c = parseFloat("15.5 kph");
console.log(c);
// the " kph" is ignored; parseFloat always assumes base 10

// ** A Date object can be converted to a number that represents the number of millisec‐ onds since midnight, January 1, 1970, UTC, using its valueOf() method:

const d = new Date();
const ts = d.valueOf();
// numeric value: milliseconds since midnight, January 1, 1970 UTC
console.log(ts);

// * Sometimes, it is useful to convert boolean values to 1 (true) or 0 (false). The conver‐ sion uses the conditional operator:

const e = true;
const n = e ? 1 : 0;
console.log(n);


// Converting to String

const n2 = 33.5;
console.log(n2); // 33.5 - a number
const s = n2.toString();
console.log(s); // 33.5 - a string

const now2 = new Date;
console.log(now2.toString()); // Mon Apr 16 2018 16:38:40 GMT-0700 (PDT)

const arr = [1, true, 'hello'];
console.log(arr.toString()); // "1,true,hello"

// Converting to Boolean

const n3 = 0; // "falsy" value
const b1 = !n3; // true
const b2 = !!n3; // false
const b3 = Boolean(n3);
console.log(n3 == false, b1, b2, b3); // true true false false