
// [0, 1)
console.log(Math.random());
// 0.6802528686091123

// [x, y)
// x + (y-x)*Math.random()
console.log(5 + (10 - 5)* Math.random());
// 8.543823077452913

// Integer in [m, n)
// m + Math.floor((n-m)*Math.random())
console.log(5 + Math.floor((10 - 5) * Math.random()));
// 7

// Integer in [m, n]
// m + Math.floor((n-m+1)*Math.random)
console.log(5 + Math.floor((10 - 5 + 1) * Math.random()));
// 5