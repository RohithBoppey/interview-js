function callMyName() {
	return this.name;
}
let obj = { name: "Rohith Boppey" };
const res = callMyName.call(obj);

console.log(res);

function sayHello() {
	return "Hello " + this.name;
}

// var obj = { name: "Sandy" };

let r = sayHello.call(obj);
console.log(r);

function applyMethod(messages) {
	return this.name + messages;
}
var names = { name: "Sreyas" };
r = applyMethod.apply(names, ["good"]);
console.log(r);

var bikeDetails = {
	displayDetails: function (registrationNumber, brandName) {
		return (
			this.name +
			" , " +
			"bike details: " +
			registrationNumber +
			" , " +
			brandName
		);
	},
};
var person1 = { name: "Rohith" };
r = bikeDetails.displayDetails.bind(person1, "TS01", "X")
// bind returns me a function with the bounded value
// call will call the function with that name
r1 = r();
console.log(r1)