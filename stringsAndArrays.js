const data1 = 'Jordan Smith';

const data2 = [].filter.call(data1, function(elem, index) {
  // Can use array methods on strings... but can only use read only methods: filter, forEach, map, some, every, etc. Can't use push, pop,splice,shift,reverse, etc.
  // same as... Array.prototype.filter...
  // use call method to set 'this' as data1.
  // pass in function as second arg to call.
  return index > 6;
});

console.log(data2); // ['S','m','i','t','h']
