
const u1 = { name: 'Cynthia' }; 
const u2 = { name: 'Jackson' }; 
const u3 = { name: 'Olive' }; 
const u4 = { name: 'James' };

const userRoles = new Map();

// set
// userRoles.set(u1, 'User');
// userRoles.set(u2, 'User');
// userRoles.set(u3, 'Admin');

// chainable
userRoles
  .set(u1, 'User')
  .set(u2, 'User')
  .set(u3, 'Admin');


// can pass an array of arrays to the constructor
const userRoles2 = new Map([
  [u1, 'User'],
  [u2, 'User'],
  [u3, 'Admin'],
]);

// get
console.log(userRoles.get(u1)); // User
console.log(userRoles.get(u2)); // User
console.log(userRoles.get(u3)); // Admin

console.log(userRoles.has(u1)); // true
console.log(userRoles.has(u4)); // false
console.log(userRoles.get(u4)); // undefined

console.log(userRoles.size); // 3

console.log(userRoles.keys()); // MapIterator { { name: 'Cynthia' }, { name: 'Jackson' }, { name: 'Olive' } }
console.log(userRoles.values()); // MapIterator { 'User', 'User', 'Admin' }

for(let u of userRoles.keys()) {
  console.log(u.name);
}
/*
  Cynthia
  Jackson
  Olive
*/

for(let r of userRoles.values())
  console.log(r);
/* 
  User
  User
  Admin
*/

for(let ur of userRoles.entries())
  console.log(`${ur[0].name}: ${ur[1]}`);
/* 
  Cynthia: User
  Jackson: User
  Olive: Admin
*/

// using destructuring
for(let [u, r] of userRoles.entries())
  console.log(`${u.name}: ${r}`);
/* 
  Cynthia: User
  Jackson: User
  Olive: Admin
*/

// entries() method is the default iterator. It works with not call it.
for(let [u, r] of userRoles) {
  console.log(`${u.name}: ${r}`);
}
/* 
  Cynthia: User
  Jackson: User
  Olive: Admin
*/

// If you need an array (instead of an iterable object), you can use the spread operator:
console.log([...userRoles.values()]); // [ 'User', 'User', 'Admin' ]

// delete
userRoles.delete(u2);
console.log(userRoles.size); // 2

// delete all
userRoles.clear();
console.log(userRoles.size); // 0