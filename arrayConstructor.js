// Array Constructor Function
// single arguement(number) -> returns an empty array of that length
// single arguement(non-number) -> returns array with just that arguement passed as an element.
// multple arguements passed -> returns new array with all arguements passed in as elements in it.

var arr1 = [];
var arr2 = new Array(50);
var arr3 = new Array(1, 2, 'three', 4, 'five');
var arr4 = new Array([1, 2, 3, 4, 5]);

console.log('arr1: ', arr1); // []
console.log('arr2: ', arr2); // [<50 empty items>]. arr of length 50, but every element is empty. (passing in only one number.)
console.log('arr3: ', arr3); // [1,2,'three',4,'five']. pass multiple elements, creates array with all of those elements.
console.log('arr4: ', arr4); // [[1,2,3,4,5]]. array with one element.
