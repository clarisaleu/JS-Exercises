// Problem:
// - Write a function that keeps track of how many times it was called and returns that number
// - All functionality should be inside of the function - none outside.

function myFunc() {
  let count = 0;

  return function() {
    // use closure.
    // practical:
    if (count < 4) {
      // some computation/functionalitny...
    } else {
      // throw error
    }
    count++;
    return count;
  };
}

console.log(myFunc()); // returns function
console.log(myFunc()); // returns function
console.log(myFunc()); // returns function

const instanceOne = myFunc();
const instanceTwo = myFunc();
console.log('instanceOne: ', instanceOne); // 1
console.log('instanceOne: ', instanceOne); // 2
console.log('instanceOne: ', instanceOne); // 3
console.log('instanceOne: ', instanceOne); // 4
console.log('instanceOne: ', instanceOne); // 5
console.log('instanceTwo: ', instanceTwo); // 1
console.log('instanceTwo: ', instanceTwo); // 2
console.log('instanceTwo: ', instanceTwo); // 3
console.log('instanceTwo: ', instanceTwo); // 4
