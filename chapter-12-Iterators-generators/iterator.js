
// Obs: Array.values() is not supported in Node.js

const book = [
  "Twinkle, twinkle, little bat!", 
  "How I wonder what you're at!", 
  "Up above the world you fly,", 
  "Like a tea tray in the sky.", 
  "Twinkle, twinkle, little bat!", 
  "How I wonder what you're at!",
];

const it = book.values();

it.next(); // { value: "Twinkle, twinkle, little bat!", done: false } 
it.next(); // { value: "How I wonder what you're at!", done: false } 
it.next(); // { value: "Up above the world you fly,", done: false } 
it.next(); // { value: "Like a tea tray in the sky.", done: false } 
it.next(); // { value: "Twinkle, twinkle, little bat!", done: false } 
it.next(); // { value: "How I wonder what you're at!", done: false } 
it.next(); // { value: undefined, done: true }
it.next(); // { value: undefined, done: true } 
it.next(); // { value: undefined, done: true }