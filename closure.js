function f() {
	function returnSanjay() {
		console.log(s);
	}
	const s = "Sanjay is a good guy";
	return returnSanjay;
}
// the inner function is returned by the outer function
// without even being executed
const r = f();
r();


// i want to create a base function which takes in value and add

function addBase(baseNumber){
	return function(newNumber){
		return baseNumber + newNumber
	}
}

const addBaseFunction = addBase(5)
console.log(addBaseFunction(10))
console.log(addBaseFunction(12))




