
// let name = "Irena";
// let age = 25;

// function greet() {
//    console.log(`Hello, ${name}!`);
// }

// function getBirthYear() {
//   return new Date().getUTCFullYear() - age;
// }

let user = {
  name: "Irena",
  age: 25,
};

function greet(user) {
   console.log(`Hello, ${user.name}!`);
}

function getBirthYear(user) {
  return new Date().getUTCFullYear() - user.age;
}

greet(user);
console.log(getBirthYear(user));