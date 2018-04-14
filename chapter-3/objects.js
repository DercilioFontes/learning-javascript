
const obj = {};

// member access operator (with dot)
obj.size; // undefined
obj.color = "yellow"; // "yellow"

console.log(obj.color);

// computed member access (with [])
obj['not an identifier'] = 3;
console.log(obj['not an identifier']); // 3
console.log(obj['color']); // yellow

// computed member access operator for symbol properties
const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]); // 8

console.log(obj);

obj.SIZE = 0;

console.log(obj[SIZE]);
console.log(obj.SIZE);

console.log(obj);

const sam1 = {
  name: 'Sam',
  age: 4,
};

// declaration on one line
const sam2 = { name: 'Sam', age: 4 };

// property values can
// be objects themselves
const sam3 = {
  name: 'Sam',
  classification: {
    kingdon: 'Anamalia',
    phylum: 'Chordata',
    class: 'Mamalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfamily: 'Felinae',
    genus: 'Felis',
    species: 'catus',
  },
};

console.log(sam3.classification.family);
console.log(sam3["classification"].family);
console.log(sam3.classification["family"]);
console.log(sam3["classification"]["family"]);

sam3.speak = function() { return "Meow!"; };

console.log(sam3.speak()); // "Meow!"

delete sam3.classification; // the whole classification tree is removed
delete sam3.speak; // the speak function is removed

console.log(sam3);