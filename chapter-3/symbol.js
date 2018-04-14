
// # New in ES6 are symbols: a new data type representing unique tokens.

const RED = Symbol();
const ORANGE = Symbol('The color of a sunset');
RED === ORANGE; // false: every symbol is unique