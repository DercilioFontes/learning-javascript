
class Car {}

class InsurancePolicy {}

function makeInsurable(o) {
  o.addInsurancePolicy = function(p) { this.InsurancePolicy = p; };
  o.getInsurancePolicy = function() { return this.InsurancePolicy; };
  o.isInsured = function() { return !!this.InsurancePolicy; };
}

// makeInsurable(Car); // Doesn't work!

const car1 = new Car();
// car1.addInsurancePolicy(new InsurancePolicy()); // TypeError: car1.addInsurancePolicy is not a function

// works
makeInsurable(car1);
car1.addInsurancePolicy(new InsurancePolicy());
console.log(car1.isInsured()); // true

// or
makeInsurable(Car.prototype);
const car2 = new Car();
car2.addInsurancePolicy(new InsurancePolicy());
console.log(car2.isInsured()); // true