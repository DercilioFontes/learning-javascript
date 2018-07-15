
const beer99 = "99 bottles of beer on the wall " + 
"take 1 down and pass it around -- " +
"98 bottles of beer on the wall.";

const match = beer99.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/g);
console.log(match);
// [ '99', '1', '98' ]


// Note the + following the character group: this signals that the preceding element should match one or more times.
const match2 = beer99.match(/[0-9]+/g);
console.log(match2);
// [ '99', '1', '98' ]


/*

Repetition modifier:

{n}  --  Exactly n  --  /\d{5}/ matches only five-digit numbers (such as a zip code).

{n,}  --  At least n  --  /\d/{n,}/ matches only five-digit numbers or longer.

{n,m}  --  At least n, at most m  --  /\d{2,5}/ matches only numbers that are at least two digits, but no more than five.

?  --  zero or one. Equivalent to {0,1}  --  /[a-z]\d?/i matches letter followed by an optional digit.

*  --  Zero or more (sometimes called a "Klene star" or Klene closure").  --  /[a-z]\d\* /i (obs: additional space to avoid closure the comment) matches a letter followed by an optional number, possibly consisting of multiple digits.

+  --  One or more  --  /[a-z]\d+/i matches a letter followed by a required number, possibly containing multiple digits.

*/