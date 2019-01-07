console.log(typeof null); // object. null is of the type null in JS.
console.log(typeof undefined); // undefined. undefined is of the type undefined in JS.
console.log(typeof []); // object. arrays are of the type object. typeof cannot determine if a piece of data is an array or not in javascript
console.log(typeof {}); // object is of the type object.

// How to tell if something is an array?
console.log(Array.isArray([])); // use isArray() method. true
console.log(Array.isArray({})); // false
// use instanceof
console.log([] instanceof Array); // true
console.log({} instanceof Array); // false
