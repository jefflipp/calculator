var result;
var convert;
var array = [];
var div = document.querySelector(".output");
var numbers = document.querySelectorAll('.input');
	console.log(numbers);


function createArray() {
	console.log(this.innerHTML);
	array.push(this.innerHTML);
	console.log(array);
	if (this.innerHTML === "=") {
			array.pop();
			convert = array.join("");
			result = eval(convert);
			console.log(convert);
			console.log(eval(convert));
			console.log(result);
			div.innerHTML=result;
	}
}

function clearSum() {
	document.querySelector('.output').innerHTML = "";
	result = "";
	convert = "";
	array = [];
}

for(var i = 0; i < numbers.length; i++) { //want to go through all of the class.input in order to do something to them
    numbers[i].addEventListener('click', createArray);//now go through input class element, listening for a click, then run the createArray fx
}

document.querySelector('#C').addEventListener('click', clearSum);//use for clearing the output field



