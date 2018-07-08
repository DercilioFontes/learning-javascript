
const moment = require('moment-timezone');

const d1 = new Date(1996, 2, 1);
const d2 = new Date(2009, 4, 27);

const msDiff = d2 - d1;

console.log(msDiff);
// 417740400000

const daysDiff = msDiff/1000/60/60/24;

console.log(daysDiff);
// 4834.958333333333 (days)

const dates = [];

const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;
for(let i=0; i<10; i++)
  dates.push(new Date(min + delta*Math.random()));

console.log(dates);

/*
[ 2017-02-18T15:37:34.628Z,
  2018-11-07T00:17:20.160Z,
  2018-08-22T23:39:07.318Z,
  2019-08-22T20:39:05.834Z,
  2017-01-09T01:01:31.424Z,
  2018-09-05T12:10:12.185Z,
  2018-03-25T03:05:02.104Z,
  2017-11-08T14:00:05.247Z,
  2018-02-04T08:31:53.228Z,
  2019-03-26T00:34:15.023Z ]
*/

// sorting descending
dates.sort((a, b) => b - a);

console.log(dates);

/*
[ 2019-11-22T09:30:48.982Z,
  2019-09-11T18:26:43.800Z,
  2019-06-05T23:03:30.810Z,
  2019-04-08T12:50:43.047Z,
  2019-03-24T10:13:33.027Z,
  2018-06-02T04:52:02.401Z,
  2018-05-31T09:23:40.053Z,
  2018-04-06T12:53:37.886Z,
  2017-05-29T05:40:25.017Z,
  2017-02-13T02:25:42.459Z ]
*/

// sorting ascending
dates.sort((a, b) => a - b);

console.log(dates);

/*
[ 2017-02-27T09:02:04.513Z,
  2017-04-11T22:07:30.416Z,
  2017-06-26T18:42:45.349Z,
  2017-09-10T09:23:43.812Z,
  2018-06-10T15:41:44.580Z,
  2018-07-06T20:38:15.932Z,
  2018-08-25T01:23:46.207Z,
  2018-09-07T12:55:38.687Z,
  2019-04-12T12:37:04.247Z,
  2019-06-05T21:43:37.644Z ]
*/


const m = moment();
console.log(m);
// moment("2018-07-07T16:13:38.886")

m.add(3, 'days');
console.log(m);
// moment("2018-07-10T16:14:35.798")

m.subtract(2, 'years');
console.log(m);
// moment("2016-07-10T16:15:22.144")


const m2 = moment();

m2.startOf('year');
console.log(m2);
// moment("2018-01-01T00:00:00.000")

m2.endOf('month');
console.log(m2);
// moment("2018-01-31T23:59:59.999")

const m3 = moment()
  .add(10, 'hours')
  .subtract(3, 'days')
  .endOf('month');

console.log(m3);
// moment("2018-07-31T23:59:59.999")