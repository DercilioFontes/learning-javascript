
const moment = require('moment-timezone');

const d = new Date(Date.UTC(2018, 6, 6));

console.log(d);
// 2018-07-06T00:00:00.000Z

const d2 = moment.tz([2016, 3, 27, 9, 19], 'America/Los_Angeles');

console.log(d2);
// moment.parseZone("2016-04-27T09:19:00.000-07:00")

console.log(d2.toDate());
// 2016-04-27T16:19:00.000Z