
const d = new Date();

// formatted Gregorian date with TZ
console.log(d);
// 2018-07-07T01:56:53.758Z

// milliseconds since Unix Epoch
console.log(d.valueOf());
// 1530928613758


// all of the below are interpreted with respect to local time

// current date
console.log(new Date());
// 2018-07-07T01:58:57.259Z

// note that months are zero-based in JavaScript: 0=Jan, 1=Feb, etc.

console.log(new Date(2015, 0));
// 2015-01-01T08:00:00.000Z

console.log(new Date(2015, 1));
// 2015-02-01T08:00:00.000Z

console.log(new Date(2015, 1, 14));
// 2015-02-14T08:00:00.000Z

console.log(new Date(2015, 1, 14, 13));
//2015-02-14T21:00:00.000Z

console.log(new Date(2015, 1, 14, 13, 30));
// 2015-02-14T21:30:00.000Z

console.log(new Date(2015, 1, 14, 13, 30, 5));
// 2015-02-14T21:30:05.000Z

console.log(new Date(2015, 1, 14, 13, 30, 5, 500));
// 2015-02-14T21:30:05.500Z


// creates dates from Unix Epoch timestamps

console.log(new Date(0));
// 1970-01-01T00:00:00.000Z

console.log(new Date(10000));
// 1970-01-01T00:00:10.000Z

console.log(new Date(1463443200000));
// 2016-05-17T00:00:00.000Z


// use negative dates to get dates prior to the Unix Epoch

console.log(new Date(-365*24*60*60*1000));
// 1969-01-01T00:00:00.000Z


// parsing date strings (defaults to local time)

console.log(new Date('June 14, 1903'));
// 1903-06-14T07:00:00.000Z

console.log(new Date('June 14, 1903 GMT-0000'));
// 1903-06-14T00:00:00.000Z