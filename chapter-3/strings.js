const dialog = 'Sam looked up, and said "hello, old friend!", as Max walked in.';
const imperative = "Don't do that";

/*
  // this will produce an error
  const dialog = "Sam looked up and said "don't do that!" to Max.";
*/

// # Quote escape
const dialog1 = "He looked up and said \"don't do that!\" to Max.";
const dialog2 = 'He looked up and said "don\'t do that!" to Max';

// # Backslash escape
const s = "In JavaScript, use \\ as an escape character in strings.";

/*
 - Double quotation marks: writing text that might be presented to the user, because of using contractions (like don’t) more often than using double quotation marks.

 - Single quotation marks:  When expressing HTML inside a JavaScript string, so that we can use double quotation marks for attribute values.
*/

// # Special Characters

'\n'; // Newline - Ex: "Line1\nLine2"
'\r'; // Carriage return - Ex: "Windows line 1\r\nWindows line 2"
'\t'; // Tab - Ex: "Speed:\t60kph"
'\''; // Single quote - Ex: "Don\'t" (You can use this even not necessary)
"\""; // Double quote - Ex: 'Sam said \"hello\".' (You can use this even not necessary)
`\``; // Backtick (or "accent grave") - Ex: `New in ES6: \` strings.``
`\$`; // Dollar sign - Ex: `New in ES6: ${interpolation}`
'\\'; // Bacslash - Ex: "\\\\ to represent \\!"

'\u2310'; // Arbitrary code point (where +XXXX+ is a hexadecimal code point)
          // "De Morgan’s law: \u2310(P \u22c0 Q) \u21D4 (\u2310P) \u22c1 (\u2310Q)"

'\xc9p\xe9e'; // Latin-1 character (where +XX+ is a hexadecimal Latin-1 code point)
              // "\xc9p\xe9e is fun, but foil is more fun."


// # Template Strings

let currentTemp = 19.5;

// 00b0 is the Unicode code point for the "degree" symbol
const message = `The current temperature is ${currentTemp}\u00b0C`;


// # Multiline Strings

const multiline = 'line1\
line2';
// output: line1line2

const multiline2 = 'line1\n\
line2';
// output: line1
//         line2

const multiline3 = `line1
line2`;
// output: line1
//         line2

// But:
const multiline3_1 = `line1
  line2`;
// output: line1
//          line2

// With string concatenation:
const multiline4 = 'line1\n' +
  'line2\n' +
  'line3';
// output: line1
//         line2
//         line3

const multiline5 = 'Current temperature:\n' +
  `\t${currentTemp}\u00b0C\n` +
  "Don't worry...the heat is on!";
// output: Current temperature:
//                 19.5°C
//         Don't worry...the heat is on!


// # Number as string

const result1 = 3 + '30'; // 3 is converted to a string; result is string '330' 
const result2 = 3 * '30'; // '30' is converted to a number; result is numeric 90
