console.log([10, 20, 30, 40, 50].indexOf(30)); // 2. @ index 2.
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); // -1. (not found in array because 2 obj are never the same in JS). ie the two objects look the same, but they are completely different.
console.log('hello world'.indexOf('o')); // 4. string index of method.
console.log([[1], [2], [3], [4]].indexOf([2])); // -1. arrays are passed by reference in JS too, so two arrays are never the same.

// Two different objects or array in JS are never the same but,
const myArr = [5];
const anotherArr = myArr;
console.log([[1], [2], [3], [4], myArr].indexOf(anotherArr)); // returns 4, because the underlying variables are referencing the same array/obj.
