// call()
// Native JS method on the function prototype object. ie you can use call on any object you define in JS.

// Ex:
const car1 = {
  brand: 'Porsche',
  getCarDescription: function(cost, year, color) {
    console.log(
      'This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n'
    );
  }
};

const car2 = {
  brand: 'Lambo'
};

// Normally call method.
car1.getCarDescription(80000, 2010, 'blue');

// can change 'this' in call method.
car1.getCarDescription.call(car2, 200000, 2013, 'yellow');

// apply().
// Essentially the same as call(), but the major difference is you pass in all the parameters of the function in as an array instead of individually.
// Ex:
const car3 = {
  brand: 'Ford' // car3 also doesn't have the getCarDescription method, but we can use apply() to use it on car3
};

car1.getCarDescription.apply(car3, [35000, 2012, 'black']); //car3 is the this context.
