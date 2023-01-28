function x() {
	var i = 2;
	function y() {
		setTimeout(() => {
			console.log(i);
		}, 1000);
	}
	y();
	i++;
}

// x();

function fun1(){
	for(var i = 1; i <= 5; i++){
		function x(i){
			setTimeout(() => {
				console.log(i)
			}, 500*i);
		}
		x(i)
	}
}
fun1();

// function createIncrement() {
// 	let count = 0;
// 	function increment() {
// 		count++;
// 		console.log(count);
// 	}
// 	let message = `Count is ${count}`;
// 	function log() {
// 		console.log(message);
// 	}

// 	return [increment, log];
// }
// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log(); // What is logged?

// function multiply(num){
// 	const base = num;
// 	return function(value){
// 		return base * value
// 	}
// }

// const double = multiply(10)
// console.log(double(3))