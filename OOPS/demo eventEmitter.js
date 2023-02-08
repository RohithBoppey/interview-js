class MyEventHandler {
	constructor() {
		this.events = {};
	}

	// mapping like

	/*
    {
        eventname: [callBacks of users subscribed]
    }
    */

	addNewEvent(eventName) {
		if (!this.events[eventName]) {
			// not exists
			this.events[eventName] = [];
		}
		// console.log(typeof(this.events[eventName]));
	}

	deleteEvent(eventName) {
		delete this.events[eventName];
	}

	userSubscribe(eventName, callback) {
        console.log(callback);
		if (this.events[eventName]) {
			// event exists
			this.events[eventName].push(callback);
		}
	}

	userUnsubscribe(eventName, callback) {
		if (this.events[eventName]) {
			this.events[eventName] = this.events[eventName].filter(cb => {
                cb != callback;
            });
		}
	}

	emit(eventName, ...args) {
		if (this.events[eventName]) {
			console.log(this.events[eventName]);
			// console.log(typeof(this.events[eventName]))
			for (let i of this.events[eventName]) {
				// console.log(i)
				i();
			}
		}
	}
}

const NewEventHanlder = new MyEventHandler();
NewEventHanlder.addNewEvent("Event1");
NewEventHanlder.addNewEvent("Event2");
NewEventHanlder.deleteEvent("Event1");

const users = [
	{
		name: "Rohith Boppey",
	},
	{
		name: "Ramesh Boppey",
	},
	{
		name: "Suneetha Boppey",
	},
	{
		name: "Jaswanth Boppey",
	},
];

function c(name){
    return console.log(`User ${name} has subscribed`);
}

users.forEach((user) => {
	NewEventHanlder.userSubscribe("Event2", () => c(user.name));
});

console.log(NewEventHanlder);
NewEventHanlder.emit("Event2");
NewEventHanlder.userUnsubscribe("Event2", () => c(users[0].name));
NewEventHanlder.emit("Event2");
