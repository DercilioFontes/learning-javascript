
// helper functions

// returns a random integer in the range [m, n] (inclusive)
function rand(m, n) {
	return m + Math.floor((n - m + 1)*Math.random());
}

// randomly returns a string representing one of the six Crown and Anchor faces
function randFace() {
	return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond'][rand(0, 5)];
}


// to print the first eight Fibonacci numbers:
for(let temp, i=0, j=1; j<30; temp = i, i = j, j = i + temp)
  console.log(j);


let s = '3';
for(; s.length<10; s = ' ' + s); // zero pad string; note that we must
console.log(s);                  // include a semicolon to terminate this for loop!

for(let x=0.2; x<3.0; x += 0.2) // increment using noninteger
  console.log(x);


// for...in loop
const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };
for(let prop in player) {
  if(!player.hasOwnProperty(prop)) continue;
  console.log(prop + ': ' + player[prop]);
}

// for...of loop
const hand = [randFace(), randFace(), randFace()];
for(let face of hand)
  console.log(`You rolled...${face}`);