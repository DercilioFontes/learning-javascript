
const beer99 = "99 bottles of beer on the wall " + 
  "take 1 down and pass it around -- " +
  "98 bottles of beer on the wall.";

const matches = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
console.log(matches);
// [ '9', '9', '1', '9', '8' ]

const m1 = beer99.match(/[0123456789]/g);
console.log(m1);
// [ '9', '9', '1', '9', '8' ]

const m2 = beer99.match(/[0-9]/g);
console.log(m2);
// [ '9', '9', '1', '9', '8' ]

const m3 = beer99.match(/[-0-9a-z.]/g);
console.log(m3);
// array with everything except whitespace

const m4 = beer99.match(/[.a-z0-9-]/g);
console.log(m4);
// same result -- the order doesn’t matter


// Negate character sets -- use a caret (^)

const m5 = beer99.match(/[^\-0-9a-z]/g);
console.log(m5);
// matches only the whitespaces