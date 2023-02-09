// // playing with closures
function x() {
	console.log("a");
	setTimeout(() => {
		console.log("hello");
	}, 3000);
	setTimeout(() => {
		console.log("in between");
	}, 0);
	setTimeout(() => {
		console.log("b");
	}, 1000);
	console.log("c");
}

// x();

// (() => {
// 	for (var i = 0; i < 5; i++) {
// 		setTimeout(() => {
// 			console.log(i);
// 		}, 100);
// 	}
// })();

// const promise1 = new Promise((resolve, reject) => {
// 	console.log(1);
// 	resolve("resolve1");
// });

// const promise2 = promise1.then((res) => {
// 	console.log(res);
// });

// console.log("promise1:", promise1);
// console.log("promise2:", promise2);

const f = () => {
	console.log("start");

	setTimeout(() => {
		console.log("setTimeout");
	});

	Promise.resolve().then(() => {
		console.log("resolve");
	});

	console.log("end");
};

// f()

let f1 = () => {
	const promise = new Promise((resolve, reject) => {
		console.log(1);
		setTimeout(() => {
			console.log("timerStart");
			resolve("success");
			console.log("timerEnd");
		}, 0);
		console.log(2);
	});

	promise.then((res) => {
		console.log(res);
	});

	console.log(4);
};

// f1();

let f2 = () => {
	const timer1 = setTimeout(() => {
		console.log("timer1");

		const timer3 = setTimeout(() => {
			console.log("timer3");
		}, 0);
	}, 0);

	const timer2 = setTimeout(() => {
		console.log("timer2");
	}, 0);

	console.log("start");
};

// f2();

const f3 = () => {
	const promise1 = Promise.resolve().then(() => {
		console.log("promise1");
		const timer2 = setTimeout(() => {
			console.log("timer2");
		}, 0);
	});

	const timer1 = setTimeout(() => {
		console.log("timer1");
		const promise2 = Promise.resolve().then(() => {
			console.log("promise2");
		});
	}, 0);

	console.log("start");
};

// f3();

let f4 = () => {
	const promise1 = new Promise((resolve, reject) => {
		const timer1 = setTimeout(() => {
			resolve("success");
		}, 1000);
	});

	const promise2 = promise1.then(() => {
		throw new Error("error!!!");
	});

	console.log("promise1", promise1);
	console.log("promise2", promise2);

	const timer2 = setTimeout(() => {
		console.log("promise1", promise1);
		// console.log("promise2", promise2);
	}, 2000);
};

// f4();