// Variable and function hoisting:
// In JS, all variables are hoisted to the top of the scope in which they are created.
// The scope is either a global of function scope.

// Variable in file:
var color = 'blue';

// According to the JavaScript Interpretor:
var color; // Hoists and declares variable here.

console.log(color); // Undefined

color = 'blue'; // Sets it equal to the correct value where it was created

console.log(color); // blue

// Function in file: (expression if declared with  var,let, or const)
console.log(getProduct(2, 3)); // Error

var getProduct = function(num1, num2) {
  // function expression.
  return num1 * num2;
};

// According to the JavaScropt Interpretor:
var getProduct; // hoisted to top.

getProduct = function(num1, num2) {
  // Assigned
  return num1 * num2;
};

console.log(getProduct(2, 3)); // 6

// Function in file (declaration - hoisted differently. Whole function is hoisted to the top of the scope):
console.log(getProduct(2, 3)); // 6
function getProduct(num1, num2) {
  return num1 * num2;
}

// Ex:
var globalVar = 'global';

(function() {
  var name = 'Jen'; // Variables and inner functions are only hoisted to the top of the outter function due to function scoping in JS.

  var getAge = function() {
    return '30';
  };

  function getState() {
    return 'Delaware';
  }
})();
