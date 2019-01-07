'use strict';

// Question:
// What does using 'strict mode' do to your code?
// Main purpose, is to enfore stricter parsing and error handling in your code.
// 1. prevents the use of global variables.
// Ex:
city = 'London'; // Global without using strict mode...
console.log(city); // city is not defined. forces you to use var, let, or const keywords
// 2. All parameter names for a function must be unique
// Ex:
function myFunc(a,a,b) {
  console.log(a,a,b);
}
myFunc(1,2,3); //  Arguement name clash. Without strict mode, you get 2 2 3. JS assumes that the second a parament overwrite the first a parameter
// 3. When you try to delete properties on object that are not deleteable, you also get an error. 
// Ex: 
delete Object.prototype; // Without strict mode, no error. just get false.


// Question:
// What are the benefits of using 'strict mode'?
// Main benefit is to enfore stricter parsing and error handling in our code. (fail fast and fail loudly... ie when there is an error in our code of there is something that is not
// a good practice, then strict mode lets us know that error before we start building more code on top of that error.)
