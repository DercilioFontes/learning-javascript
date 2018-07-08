
const moment = require('moment-timezone');

let m = moment().subtract(10, 'seconds').fromNow();
console.log(m);
// a few seconds ago

m = moment().subtract(50, 'seconds').fromNow();
console.log(m);
// a minute ago

m = moment().subtract(5, 'minutes').fromNow();
console.log(m);
// 5 minutes ago

m = moment().subtract(45, 'minutes').fromNow();
console.log(m);
// an hour ago

m = moment().subtract(5, 'hours').fromNow();
console.log(m);
// 5 hours ago

m = moment().subtract(22, 'hours').fromNow();
console.log(m);
// a day ago

m = moment().subtract(220, 'days').fromNow();
console.log(m);
// 7 months ago

m = moment().subtract(320, 'days').fromNow();
console.log(m);
// a year ago