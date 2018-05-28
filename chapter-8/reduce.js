
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



const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];

const stats = data.reduce((acc, x) => {
  acc.N++;
  let delta = x - acc.mean;
  acc.mean += delta/acc.N;
  acc.M2 += delta*(x - acc.mean);
  return acc;
}, { N: 0, mean: 0, M2: 0 });

if(stats.N > 2) {
  stats.variance = stats.M2 / (stats.N - 1);
  stats.stdev = Math.sqrt(stats.variance);
}

console.log(stats);


const words2 = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];

const longWords = words2.reduce((acc, w) => w.length>6 ? acc+" "+w : acc, "").trim();

console.log(longWords);