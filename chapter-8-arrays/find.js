
class Person {
  constructor(name) {
    this.name = name;
    this.id = Person.nextId++;
  }
}

Person.nextId = 0;

const jamie = new Person("Jamie"),
  juliet = new Person("Juliet"),
  peter = new Person("Peter"),
  jay = new Person("Jay");

const arr = [jamie, juliet, peter, jay];

// option 1: diect comparison of ID
console.log(arr.find(p => p.id === juliet.id)); // Person { name: 'Juliet', id: 1 }

// option 2: using "this" argument
console.log(arr.find(p => p.id === this.id, juliet)); // No working!!

arr.forEach(o => console.log(o.id));