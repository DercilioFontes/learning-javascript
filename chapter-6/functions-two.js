// Functions as Properties of Objects
const o = {
  name: 'Wallace',
  bark: function() { return 'Woof!'; },
};

  // ES6
  const o2 = {
    name: 'Wallace',
    bark() { return 'Woof!'; },
  };


// The this Keyword
const o3 = {
  name: 'Wallace',
  speak() { return `My name is ${this.name}!`; },
};
console.log(o3.speak());

const speak = o3.speak;
console.log(speak === o3.speak); // true
console.log(speak()); // "My name is undefined!"

// this in a nested function
const o4 = {
  name: 'Julie',
  greetBackwards: function() {
    const self = this;
    function getReverseName() {
      let nameBackwards = '';
      for(let i=self.name.length-1; i>=0; i--) {
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym ,olleH`;
  },
};

console.log(o4.greetBackwards());


// Function expression
const g = function f(stop) {
  if(stop) console.log('f stopped');
  f(true);
};
g(false);