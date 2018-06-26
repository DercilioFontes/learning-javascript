
// setTimeout(function() { console.log("hello");}, 1500);

// var i;
// for(i=5; i>=0; i--) {
//   setTimeout(function() {
//     console.log(i===0 ? "go!" : i); 
//   }, (5-i)*1000);
// }


// i becomes -1 before execution of the first call of console.log
/* 
-1
-1
-1
-1
-1
-1
*/


// function loopBody(i) {
//   setTimeout(function() {
//     console.log(i===0 ? "go!" : i);
//   }, (5-i)*1000);
// }

// var i;
// for(i=5; i>0; i--) {
//   loopBody(i);
// }

/* 
5
4
3
2
1
*/

// with IIFE
// var j;
// for(j=5; j>0; j--) {
//   (function(i) {
//     setTimeout(function() {
//       console.log(i===0 ? "go!" : i);
//     }, (5-i)*1000);
//   })(j);
// }

/* 
5
4
3
2
1
*/

// with block-scoped variable
for(let i=5; i>0; i--) { 
  setTimeout(function() {
    console.log(i===0 ? "go!" : i);
}, (5-i)*1000);
}