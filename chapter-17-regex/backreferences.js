
const promo = "Opening for XAAX is the dynamic GOOG! At the box office now!";

const bands = promo.match(/([A-Z])([A-Z])\2\1/g);
console.log(bands);

/*
The syntax for groups is as follows:

(«pattern») is a capturing group. Whatever is matched by pattern can be accessed via backreferences or as the result of a match operation.

(?:«pattern») is a noncapturing group. pattern is still matched against the input, but not saved as a capture. Therefore, the group does not have a number you can refer to (e.g., via a backreference).

\1, \2, and so on are known as backreferences; they refer back to a previously matched group. The number after the backslash can be any integer greater than or equal to 1, but the first digit must not be 0.

reference: http://speakingjs.com/es5/ch19.html 
*/

const html = `<img alt='A "simple" example.'>` +
  `<img alt="Don't abuse it!">`;

const matches = html.match(/<img alt=(['"]).*\1>/g);
console.log(matches);
/*
[ '<img alt=\'A "simple" example.\'>',
  '<img alt="Don\'t abuse it!">' ]
*/