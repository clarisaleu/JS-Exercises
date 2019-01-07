// Create multiple objects of the same class very quickly

// Constructor Function
function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

var user1 = new User('John', 'Smith', 26, 'male'); // Object of the class User
var user200 = new User('Jill', 'Robinson', 25, 'female');
