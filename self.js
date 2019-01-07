this.color = 'Red';
var myCar = {
  color: 'Blue',
  logColor: function() {
    var self = this; // References myCar. Stores&Preserves a reference to a certain scope.
    console.log('In logColor - this.color: ' + this.color);
    console.log('In logColor - self.color: ' + self.color);
    (function() {
      console.log('In IIFE - this.color: ' + this.color); // In the scope of a new function. Only references the global object.
      console.log('In IIFE - self.color: ' + self.color);
    })();
  }
};

myCar.logColor();

// Output:
// In logColor - this.color: Blue
// In logColor - self.color: Blue
// In IIFE - this.color: Red
// In IIFE - self.color: Blue
