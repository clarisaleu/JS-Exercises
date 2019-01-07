var string1 = 'Tampa';
var string2 = string1;
string1 = 'Venice';

console.log(string2); // 'Tampa'. Strings are passed by value in JS.

////////////////////////////////

var person1 = {
  name: 'Alex',
  age: 30
};

var person2 = person1;

person2.name = 'Kyle';

console.log(person1); // {name: 'Kyle', age: 30}. Objects are passed by reference in JS.
