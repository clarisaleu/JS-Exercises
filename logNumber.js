var num = 50;
function logNumber() {
  console.log(num);
  var num = 100; // function scoped.
}

logNumber(); // Undefined

// Hoisting: function scope.
var num = 50;

function logNumber() {
  var num;
  console.log(num);
  num = 100;
}

logNumber(); // Undefined.

// Hoisting: Parent Scope
var num = 50;

function logNumber() {
  console.log(num); // No num in function scope, so access parent scope.
}

logNumber(); // 50.
