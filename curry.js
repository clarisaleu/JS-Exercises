function getProduct(num1, num2) {
  return num1 * num2;
}

getProduct(10, 20);

// Curried function:
function getProduct(num1) {
  return function(num2) {
    return num1 * num2;
  };
}

getProduct(10)(20); //200.

// Why is currying useful?
// Ex:
function getTravelTime(distance, speed) {
  return distance / speed; // km / (km/hr)
}

getTravelTime(600, 50); // 12 hours.

// Curried Function: Keep distance the same for specific use case.
function getTravelTime(distance) {
  return function(speed) {
    return distance / speed;
  };
}

const travelTimeBosNyc = getTravelTime(400);
const travelTimeMiamiAtlanta = getTravelTime(600);
console.log(travelTimeBosNyc); // returns inner function.
console.log(travelTimeBosNyc(80)); // returns 5 hours.
