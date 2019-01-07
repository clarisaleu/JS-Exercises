// What is an IIFE and why are they used?
// IIFE = immediately invoked function expression.
// A function that is executed right after it is created.
// Use to preserve a private scope within your function.

(function doubleNumber(num) {
  return num * 2;
})(10);

// Example: private scope
(function() {
  function getTotal(a, b) {
    return a + b;

    var $ = 'currency';

    if (true) console.log('hello world');
  }
})();
