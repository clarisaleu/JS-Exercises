//Building my own for each


function myForEach(arr, func){
	//loop through array
	for(var i = 0; i <arr.length; i++){
		//call func for each item in array
		func(arr[i]);
	}
}

/*
Example:
var veggies = ["carrots", "celery", "brocolli", "spinach"];
myForEach(veggies, function(veggie){
	console.log("I love "+veggie+"!");
})

Prints out:
I love carrots!
I love celery!
I love brocolli!
I love spinach!
*/


Array.prototype.myForEach= function(func){
	for(var i =0; i< this.length; i++){
		func(this[i]);
	}
}
function(func){
	for(var i = 0; i <this.length; i++){
		func(this[i]);
	}
}

/*
Example: 
var fruits = ["bananas", "oranges", "apples", "pineapple"];
fruits.myForEach(function(fruit){
	console.log("I love "+ fruit+"!");
})

Prints out:
I love bananas!
I love oranges!
I love apples!
I love pineapple!
*/
