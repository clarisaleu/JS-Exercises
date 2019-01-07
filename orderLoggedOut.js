function logNumbers() {
  console.log(1);
  setTimeout(function() {
    console.log(2);
  }, 1000); // Last number out
  setTimeout(function() {
    console.log(3);
  }, 0); // Even though line 3 has a 0 ms delay, the setTimeout still affects how long the console.log statement runs. Gets pushed into event loop, and must wait for other events to run first.
  console.log(4);
}

logNumbers();

// Console:
// 1
// 4
// 3
// 2

// Event loop in browser. Where all the events taking place in the browser are placed. Can include click events, etc.
// All these events are placed in an events queue, and are executed one at a time as they were placed in the queue.
