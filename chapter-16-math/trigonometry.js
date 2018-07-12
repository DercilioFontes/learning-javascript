
// All trigonometric functions in the Math library operate on radians, not degrees.

// Sine of x radians
console.log(Math.sin(Math.PI/2));
// 1
console.log(Math.sin(Math.PI/4));
// 0.7071067811865475

// Cosine of x radians
console.log(Math.cos(Math.PI));
// -1
console.log(Math.cos(Math.PI/4));
// 0.7071067811865476

// Tangent of x radians
console.log(Math.tan(Math.PI/4));
// 0.9999999999999999
console.log(Math.tan(0));
// 0

// Inverse sine (arcsin) of x (result in radians)
console.log(Math.asin(0));
// 0
console.log(Math.asin(Math.SQRT1_2));
// 0.7853981633974484

// Inverse cosine (arccos) of x (result in radians)
console.log(Math.acos(0));
// 1.5707963267948966
console.log(Math.acos(Math.SQRT1_2));
// 0.7853981633974483

// Inverse tangent (arctan) of x (result in radians)
console.log(Math.atan(0));
// 0
console.log(Math.atan(Math.SQRT1_2));
// 0.6154797086703874

// Counterclockwise angle (in radians) from the x-axis to the point (x, y)
console.log(Math.atan2(0, 1));
// 0
console.log(Math.atan2(1, 1));
// 0.7853981633974483

/*
If you’re dealing with degrees, you’ll need to convert them to radians. The calculation is easy: divide by 180 and multiply by π. It’s easy to write helper functions:
function deg2rad(d) { return d/180*Math.PI; } 
function rad2deg(r) { return r/Math.PI*180; }
*/