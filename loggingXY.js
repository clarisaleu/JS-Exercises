// What is the value of y when it is logged out?
// What is the value of x when it is logged out?

(function() {
  // Immediately invoke function expression.
  // Can use strict mode here and get an error right off the bat.
  var x = (y = 200);
  // Same thing as: (based on syntax)
  // y = 200 as a global variable.
  // var x = y;
})();

console.log('y: ', y); // 200. like global variable.
console.log('x: ', x); // reference error. can't access x on the global scope as var is function scoped.
