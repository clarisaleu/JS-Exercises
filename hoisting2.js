// Variables and functions are hoisted to the top of the scope that they are declared in, whether that be the global, function, or block scope depending on the type used to define them.
// Two scopes a variable of a function can be hoisted to the top of when using the var type (function scoped):
// global scope or a function scope.

// If you are using the const or let type (block scoped) to declare a variable -
// global scope, function scope, or block scope.
// block scope can be a for loop, if else statement, while loop, etc.
// When you use the const or let statement to declare a variable in a block - it will only
// be hoisted to the top of that block and it will not be hoisted to the top of the parent function of global scope.

//Example:
function getTotal() {
  let total = 0; // Hoisted to top of function.
  for (var i = 0; i < 10; i++) {
    let valueToAdd = i; // Hoisted to top of block (block scoped.)
    var multiplier = 2; // Hoisted to top of function. (function scoped.)
    total += valueToAdd * multiplier;
  }
  return total;
}

getTotal();

// JS Interpretor:
function getTotal() {
  let total; // Cannot access let or const declared variables until they are actually declared.
  var multiplier;
  total = 0;
  for (var i = 0; i < 10; i++) {
    let valueToAdd;
    valueToAdd = i;
    multiplier = 2;
    total += valueToAdd * multiplier;
  }
  return total;
}
getTotal();
