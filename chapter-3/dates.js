
const now = new Date();
console.log(now);

// note that months are zero-based: 9=October(10)
const halloween = new Date(2016, 9, 31);
console.log(halloween);
// output: 2016-10-31T07:00:00.000Z

// 19:00 = 7:00 pm
const halloweenParty = new Date(2016, 9, 31, 7, 0);
console.log(halloweenParty);
// ouput: 2016-10-31T14:00:00.000Z


// you can retrieve its components:
console.log(now.getFullYear()); // 2018
console.log(now.getMonth()); // 3 (April)
console.log(now.getDate()); // 16
console.log(now.getDay()); // 1 (Mon; 0=Sun, 1=Mon,...)
console.log(now.getHours()); // 14
console.log(now.getMinutes()); // 59
console.log(now.getSeconds()); // 47
console.log(now.getMilliseconds()); // 284