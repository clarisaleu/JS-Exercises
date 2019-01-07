// bind() method allows you to bind this context of a function to a particular object, similar to call and apply.
// also allows you to define parameters that you want to hold constant.

this.distance = 1000;

const roadTrip1 = {
  distance: 3000,
  getDistance: function(unit = 'mi', caption = 'in total') {
    return this.distance + unit + caption;
  }
};

const roadTrip2 = {
  distance: 5000
};

const getTripDistance = roadTrip1.getDistance;
getTripDistance(); // 1000. happens because the context is now the global object.

// Fix using bind:
const getTripDistance = roadTrip1.getDistance.bind(roadTrip1);
getTripDistance(); // 3000.

// Ex:
const getTripDistance = roadTrip1.getDistance.bind(roadTrip2, 'km');
getTripDistance(' left to go'); // 5000.
