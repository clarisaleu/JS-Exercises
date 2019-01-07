function getTotal() {
  var args = Array.prototype.slice.call(arguments); // use arguements keyword.
  // arguements obj is an array like object... can use slice on arguements and create an array of with arguements
  // console.log(arguments); // prints out all arguements passed in.
  if (args.length === 2) {
    return args[0] + args[1];
  } else if (args.length === 1) {
    return function(num2) {
      return args[0] + num2;
    };
  }
}

// singly invoked:
console.log(getTotal(10, 20));

// doubly invoked: (curried)
console.log(getTotal(10)(20));
