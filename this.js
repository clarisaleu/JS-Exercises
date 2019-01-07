// 'this' = refers to whatever object it is in the context of.
// console.log(this) --> get global window object.

var house = {
  price: 100000,
  squareFeet: 2000,
  owner: 'Taylor',
  getPricePerSquareFoot: function() {
    return house.price / house.squareFeet;
  }
};

console.log(house.price);
console.log(house.getPricePerSquareFoot());

// Solution
var house = {
  price: 100000,
  squareFeet: 2000,
  owner: 'Taylor',
  getPricePerSquareFoot: function() {
    return this.price / this.squareFeet;
  }
};

console.log(house.price);
console.log(house.getPricePerSquareFoot());
