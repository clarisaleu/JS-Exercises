tripleAdd(10)(20)(30); // returns 60
// returns total of all 3 numbers added together with a triple invocation

tripleAdd1(10, 20, 30);

// curried function. sequence of functions in which function in the sequence only takes in one or multiple arguement.
function tripleAdd(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    };
  };
}

// uncurried function.
function tripleAdd1(num1, num2, num3) {
  return num1 + num2 + num3;
}
