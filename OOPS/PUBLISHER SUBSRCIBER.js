class PublisherSubscriberSystem {
	events = [];
	// should be eventname -> Mappping
	addNewEvent(eventName) {
		this.events[eventName] = [];
		console.log(`Event with name ${eventName} has been created`);
	}

	deleteEvent(eventName) {
		if (this.events[eventName]) {
			// exisits
			delete this.events[eventName];
			console.log(`Event with name ${eventName} has been created`);
			return;
		}
		console.log(`Event with name ${eventName} cannot be found`);
	}

	subscribe(eventName, subscriber) {
		if (!this.events[eventName]) {
			this.addNewEvent(eventName);
		}
		this.events[eventName].push(subscriber);
		console.log(`${subscriber.name} Subscribed to Event ${eventName}`);
	}

	emit(eventName) {
		if (this.events[eventName]) {
			// exisits -> run all callbacks
			for (let i of this.events[eventName]) {
				i.callback();
			}
		}
	}

	unsubscribe(eventName, subscriber) {
		if (this.events[eventName]) {
			// exisits
			this.events[eventName] = this.events[eventName].filter(
				(sub) => sub !== subscriber
			);
			console.log(
				`Subscriber ${subscriber.name} has been unsubscribed from ${eventName}`
			);
		}
	}
}

class Subscriber {
	name;
	callback() {
		console.log(`${this.name} method has been envoked`);
	}
	constructor(name) {
		this.name = name;
		console.log(`${name} has been created`);
	}
}

const demoPubSubSystem = new PublisherSubscriberSystem();

const sub1 = new Subscriber("Rohith");
const sub2 = new Subscriber("Jaswanth");

// sub1.callback()

demoPubSubSystem.addNewEvent("Event1");

demoPubSubSystem.subscribe("Event1", sub1);
demoPubSubSystem.subscribe("Event1", sub2);

demoPubSubSystem.subscribe("Event 2", sub1);
demoPubSubSystem.subscribe("Event 2", sub2);

demoPubSubSystem.unsubscribe("Event 2", sub1);

demoPubSubSystem.emit("Event 2");

console.log(demoPubSubSystem);
