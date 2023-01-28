console.log(2 == "2");
console.log(2 === "2");
console.log("S" + 1);
console.log(1 / 0);
console.log(3 + 8 + "2" + 1);
console.log("3" + 8 + 2 + 1);

const obj1 = {name: "Rohith"}
const obj2 = {name: "Rohith"}

console.log(obj1 == obj2);
console.log(obj1 === obj2);

console.log(typeof(NaN));

function f1() {
	console.log(a);
	console.log(b);
	var a = "something";
	let b = 123;
}

// f1();

const a = {
	name: "Rohith",
	age: [],
	sayHello: function () {
		return "hello " + this.name;
	},
};

const b = {
	name: "Jaswanth",
	age: [],
	sayHello: function (age, phone_number) {
		return "hello " + this.name + " " + age + " " + phone_number;
	},
};

const r = b.sayHello.bind(a, 20, "9533666898");
const res = r();
console.log(res);
