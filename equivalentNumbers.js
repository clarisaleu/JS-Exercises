// In JS, all numbers are IEEE 754 Floating Point Numbers.
// 2/3 => 0.6666666667

console.log(900.9 === 3 * 300.3); // false.
console.log(300.3 * 3); // 900.900000001. no way to map the decimal 1/10th to a finite binary FP number.

// Handle this problem:
Number((300.3 * 3).toFixed(2)); // 900.90 toFixed is a number method that returns the given number (as string) fixed to a certain number of decimal places.
Number((300.3 * 3).toPrecision(12)); // 900.900000000 toPrecision is a number method in which the total number (returned as string) of digits will not exceed the number passed in.

// or... change to integer, multiply, divide.
(300.3 * 10 * 3) / 10; // 900.9
