
const d = new Date(Date.UTC(1815, 9, 10));

console.log(d);
// 1815-10-10T00:00:00.000Z

console.log(d.getFullYear());
// 1815

console.log(d.getMonth());
// 9 - October

console.log(d.getDate());
// 9

console.log(d.getDay());
// 1 - Monday

console.log(d.getHours());
// 17

console.log(d.getMinutes());
// 0

console.log(d.getMilliseconds());
// 0

// there are allso UTC equivalents to the above:
console.log(d.getUTCFullYear());
// 1815

console.log(d.getUTCMonth());
// 9 - October

console.log(d.getUTCDate());
// 10