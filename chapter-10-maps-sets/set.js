
const roles = new Set();

console.log(roles.add("User")); // Set { 'User' }
console.log(roles.add("Admin")); // Set { 'User', 'Admin' }

console.log(roles.size);  // 2

// trying to add "User" again
console.log(roles.add("User")); // Set { 'User', 'Admin' }
console.log(roles.size); // 2

console.log(roles.delete("Admin")); // true
console.log(roles); // Set { 'User' }
console.log(roles.delete("Admin")); // false