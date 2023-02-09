// this method should be able to have the following methods
/*
getSize() = all the size
getAvailableParkingSlots() = all the free slots
park(vehicle id) = park the vehicle
remove(vehicle id) = remove the vehicle
printAllSlots() = print all slots with vehicle slots
isFull() = whether the car is full or not
*/

class ParkingSpace {
	slots = [];
	constructor(number_of_slots) {
		this.slots = new Array(number_of_slots).fill(-1);
	}
	printAllSlots() {
		console.log(`All Parking slots: ${this.slots}`);
	}
	getSize() {
		console.log(`The size of parking space is ${this.slots.length}`);
	}
	getAvailableFreeSlots() {
		let numberOfFreeSlots = 0;
		for (let i = 0; i < this.slots.length; i++) {
			if (this.slots[i] === -1) {
				numberOfFreeSlots++;
			}
		}
		console.log(`Number of free slots are: ${numberOfFreeSlots}`);
		// this.printAllSlots();
		return numberOfFreeSlots;
	}
	parkCar(carId) {
		for (let i = 0; i < this.slots.length; i++) {
			if (this.slots[i] === -1) {
				// free space exists
				console.log(`Car ${carId} has been parked at pos: ${i}`);
				this.slots[i] = carId;
				return true;
			}
		}
		console.log(`Cannot park as No slot is empty`);
		return false;
	}

	unparkCar(carId) {
		for (let i = 0; i < this.slots.length; i++) {
			if (this.slots[i] !== -1 && this.slots[i] == carId) {
				// car found at some space
				console.log(`Car ${carId} has been unparked from pos: ${i}`);
				this.slots[i] = -1;
				return true;
			}
		}
		console.log(`Car ${carId} has not been found`);
		return false;
	}

	isFull() {
		if (this.getAvailableFreeSlots() == 0) {
			console.log(`Parking Space is full`);
		} else {
			console.log(`Parking Space is not full`);
		}
	}
}

const newParkingSpace = new ParkingSpace(5);

// newParkingSpace.getSize();
// newParkingSpace.printAllSlots();
// newParkingSpace.getAvailableFreeSlots();

newParkingSpace.parkCar(67);
newParkingSpace.parkCar(68);
newParkingSpace.parkCar(69);
newParkingSpace.parkCar(70);
newParkingSpace.parkCar(72);
newParkingSpace.parkCar(5);

newParkingSpace.isFull();

newParkingSpace.printAllSlots();
newParkingSpace.getAvailableFreeSlots();

newParkingSpace.unparkCar(67);
newParkingSpace.unparkCar(69);

newParkingSpace.parkCar(5);

newParkingSpace.printAllSlots();
newParkingSpace.isFull();

console.log(newParkingSpace);
