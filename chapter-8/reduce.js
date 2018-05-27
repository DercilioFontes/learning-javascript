
const arr = [5, 7, 2, 4];
const sum = arr.reduce((acc, x) => acc += x, 0);
console.log(sum); // 18

const sum2 = arr.reduce((acc, x) => acc += x);
console.log(sum2); // 18

const words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];

const alphabetical = words.reduce((acc, x) => {
  if(!acc[x[0]]) acc[x[0]] = [];
  acc[x[0]].push(x);
  return acc;
}, {});
console.log(alphabetical);

const data = []