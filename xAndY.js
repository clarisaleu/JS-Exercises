var x = 10;

function y() {
  x = 100; // becomes global variable.
  return;
  function x() {} // x is hoisted to the top of the function scope
}

y();

console.log(x); // 10. because of hoisting.

// Under the hood:
// everything is hoisted in javascript.
var x = 10;
function y() {
  function x() {}
  x = 100;
  return;
}
y();
console.log(x); // still equal to 10.
