const list1 = [1, 2, 3, 4, 5]; // arrays are passed by reference.
const list2 = list1; // list1 and list2 reference the same underlying array in memory.
list1.push(6, 7, 8);
list1 = [10, 20, 30]; // list2 still references first reference of list1. list1 points to new list in memory.

console.log(list2);
console.log(list1); // [10,20,30].

// Question:
// What will list2 contain?
// [1,2,3,4,5,6,7,8]
// ex: passing by value:
const myNum = 10;

// Question:
// How can we set list2 equal to an array that has the same value as list1 without referencing the same underlying array as list1?
const list1 = [1, 2, 3, 4, 5];
const list2 = list1.slice();
// const list2 = list1.concat([]);
// or: list2 = []
// use for loopp...
list1.push(6, 7, 8);
console.log('List 1: ', list1); // [1,2,3,4,5,6,7,8]
console.log('List 2:', list2); // [1,2,3,4,5]
