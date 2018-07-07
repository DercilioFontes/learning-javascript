
const moment = require('moment-timezone');

const d = new Date(Date.UTC(1930, 4, 10));

console.log(d.toLocaleDateString());
// 1930-5-9

console.log(d.toLocaleString());
// 1930-5-9 16:00:00

console.log(d.toLocaleTimeString());
// 16:00:00

console.log(d.toTimeString());
// 17:00:00 GMT-0700 (PDT)

console.log(d.toUTCString());
// Sat, 10 May 1930 00:00:00 GMT


console.log(moment(d).format("YYYY-MM-DD"));
// 1930-05-09

console.log(moment(d).format("YYYY-MM-DD HH:mm"));
// 1930-05-09 17:00

console.log(moment(d).format("YYYY-MM-DD HH:mm Z"));
// 1930-05-09 17:00 -07:00

console.log(moment(d).format("dddd, MMMM [the] Do, YYYY"));
// Friday, May the 9th, 1930

console.log(moment(d).format("h:mm a"));
// 5:00 pm