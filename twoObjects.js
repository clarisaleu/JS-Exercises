const user1 = {
  name: 'Jordan',
  age: 28
};

const user2 = {
  name: 'Jordan',
  age: 28
};

console.log(user1 == user2); // false.
console.log(user1 === user2); // false.

// two different objects are never equal to eachother in javascript. objects are passed by reference instead of by value.
// both user objects reference two different users in memory.

// If instead:
const user1 = {
  name: 'Jordan',
  age: 28
};

const user2 = user1; // referencing the same user object in memory.

console.log(user1 == user2); // true.
console.log(user1 === user2); // true.

// Compare properties & values of objects and see if they are the same:
console.log(JSON.stringify(user1) == JSON.stringify(user2)); // true
console.log(JSON.stringify(user1) === JSON.stringify(user2)); //true

// the same holds for arrays in JS
console.log([] == []); // false. two different arrays in memory
console.log(JSON.stringify([]) === JSON.stringify([])); //true
