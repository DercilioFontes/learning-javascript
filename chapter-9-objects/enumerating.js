
class Super {
  constructor() {
    this.name = 'Super';
    this.isSuper = true;
  }
}

Super.prototype.sneaky = 'not recommended!';

class Sub extends Super {
  constructor() {
    super();
    this.name = 'Sub';
    this.isSub = true;
  }
  toString() {
    return `${this.name} - isSub: ${this.isSub}`;
  }
}

const obj = new Sub();

for(let p in obj) {
  console.log(`${p}: ${obj[p]}` +
    (obj.hasOwnProperty(p) ? '' : ' (inherited)'));
}

// Object.keys includes only properties defined on the prototype!
Object.keys(obj).forEach(p => console.log(p));
/*
  name
  isSuper
  isSub
*/

const objSuper = new Super();

console.log(objSuper.toString()); // [object Object]
console.log(obj.toString()); // Sub - isSub: true