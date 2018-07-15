
/*

\d  --  [0-9]
\D  --  [^0-9]

\s  --  [ \t\v\n\r] (Includes tabs, spaces, and vertical tabs.)
\S  --  [^ \t\v\n\r]

\w  --  [a-zA-Z_] (Note that dashes and periods are not included in this, making it unsuitable for things like domain names and CSS classes.)
\W  --  [^a-zA-Z_]

*/

const stuff = 
  'hight:     9\n' +
  'medium:    5\n' +
  'low:       2\n';

const levels = stuff.match(/:\s*[0-9]/g);
console.log(levels);
// [ ':     9', ':    5', ':       2' ]


const messyPhone = '(505) 555-1515';
const neatPhone = messyPhone.replace(/\D/g, '');
console.log(neatPhone);
// 5055551515

const field = '   something  ';
const valid = /\S/.test(field);
console.log(valid);
// true