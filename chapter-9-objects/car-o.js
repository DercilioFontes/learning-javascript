
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this._userGears[0];
  }
  get userGear() { return this._userGear; }
  set userGear(value) {
    if(this._userGears.indexOf(value) < 0)
      throw new Error(`Invalid gear: ${value}`);
    this._userGear = value;
  }
  shift(gear) { this.userGear = gear; }
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
car1.shift('D');
car2.shift('R');

console.log(car1 instanceof Car); // true
console.log(car2 instanceof Array); // false

console.log(car1.userGear); // D
console.log(car2.userGear); // R


// With private property with WeakMap

const CarP = (function() {

  const carProps = new WeakMap();

  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this._userGears = ['P', 'N', 'R', 'D'];
      carProps.set(this, { userGear: this._userGears[0] });
    }

    get userGear() { return carProps.get(this).userGear; }
    set userGear(value) {
      if(this._userGears.indexOf(value) < 0)
        throw new Error(`Invalid gear: ${value}`);
      carProps.get(this).userGear = value;
    }

    shift(gear) { this.userGear = gear; }
  }

  return Car;
})();

const car3 = new CarP("Ford", "Focus");
const car4 = new CarP("Toyota", "Corolla");
car3.shift('N');
car4.shift('D');

console.log(car3.userGear); // N
console.log(car4.userGear); // D


// Class as function

function Car3(make, model) {
  this.make = make;
  this.model = model;
  this._userGears = ['P', 'N', 'R', 'D'];
  this._userGear = this.userGears[0];
}

console.log(typeof Car); // function
console.log(typeof Car3); // function