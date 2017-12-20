//Prints the reverse array to console

function printReverse(arr){
	for(var i = arr.length-1; i>=0; i-- ){
		console.log(arr[i]);
	}
}

//Returns true if array is uniform & false if not
function isUniform(arr){
	var comp = arr[0];
	for(var i = 1; i <arr.length-1; i++){
		if(arr[i]!==comp){
			return false;
		}
	}
	return true;
}

//Sums number array
function sumArray(arr){
	var sum = Number(arr[arr.length-1]);
	for(var i = 0; i <arr.length-1; i ++){
		sum+= Number(arr[i]);
	}
	return sum;
}

//Returns max number in array
function max(arr){
	var maxNum = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(maxNum<arr[i]){
			maxNum = arr[i];
		}
	}
	return maxNum;
}
