
class Vehicle {
  constructor() {
    this.passengers = [];
    console.log("Vehicle created");
  }
  addPasseger(p) {
    this.passengers.push(p);
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    console.log("Car created");
  }
  deployAirbags() {
    console.log("BWOOSH!")
  }
}

const v = new Vehicle(); // Vehicle created
v.addPasseger("Frank");
v.addPasseger("Judy");
console.log(v.passengers); // [ 'Frank', 'Judy' ]

const c = new Car(); // Vehicle created
                     // Car created
c.addPasseger("Alice");
c.addPasseger("Cameron");
console.log(c.passengers); // [ 'Alice', 'Cameron' ]

// v.deployAirbags(); // error
c.deployAirbags(); // BWOOSH!

class Motorcycle extends Vehicle {}

const m = new Motorcycle();

console.log(c instanceof Car); // true
console.log(c instanceof Vehicle); // true
console.log(m instanceof Car); // false
console.log(m instanceof Motorcycle); // true
console.log(m instanceof Vehicle); // true