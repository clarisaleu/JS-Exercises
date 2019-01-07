// 3 Different Ways to Create an Object in JS:

// Object Literal Syntax. (most common way)
const myBoat = {
  length: 24,
  maxSpeed: 45,
  passengers: 14,
  getLength: function() {
    return this.length;
  }
};

// new keyword & Object constructor
const student = new Object();
student.grade = 12;
student.GPA = 3.7;
student.classes = ['Math', 'English', 'Chem'];
student.getClasses = function() {
  return this.classes;
};

// Constructor Function: can make a lot of similar obj very quickly. (of the same class)
function Car(color, brand, year) {
  this.color = color;
  this.brand = brand;
  this.year = year;
}
Car.prototype.getColor = function() {
  return this.color;
};
const carlysCar = new Car('blue', 'ferrari', 2015);
console.log(carlysCar); //Car object.
const jimsCar = new Car('red', 'tesla', 2019);
console.log(jimsCar.getColor()); // red
