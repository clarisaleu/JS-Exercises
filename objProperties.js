const a = {};
const b = { name: 'b' };
const c = { name: 'c' };

a[b] = 200; // place property on our obj that is not a string or number, but an obj... but only keys can only be strings in JS on objs.
// a['[object Object]'] =200;
a[c] = 400;
// a['[object Object]'] =400;

console.log(a[b]); //400.

// What is really happening?
console.log(a); // {'[object Object]':400}. JS coerces the b object into a string as key...
// cannot place object as a key.. object gets converted to the string '[object Object]'
