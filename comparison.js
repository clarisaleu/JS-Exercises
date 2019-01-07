// Difference between comparison operators: '==' and '===':
// == (equals). Tests for abstract equality. Doesn't test for data type.
// ==== (strict equals). Tests for strict equality. Does test for data type.

console.log(7 == '7'); // True.
console.log(7 === '7'); // False.

// Under the hood when using '=='
// Comparing a number & a string: Then the string is converted to a number and the comparison is made.
// Comparing a boolean and a non-boolean: Then the non-boolean is converted to a boolean and the comparison is made.
// Comparing an object and a primitive data-type: object is converted to a primitive data-type (either string/number..) & comparison is made.
