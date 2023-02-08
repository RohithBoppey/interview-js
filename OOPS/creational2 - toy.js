function ToyFactory() {
	this.toy = ToyDuck; //toy property set to ToyDuck by default
	this.createToy = function (chosen) {
		if (chosen.toyType === "car") {
			this.toy = ToyCar;
		} else {
			this.toy = ToyDuck;
		}
		this.toy = new this.toy(chosen);
	};
}

function ToyDuck(duckDetails) {
	this.color = duckDetails.color;
	this.price = duckDetails.price;
} //define the ToyDuck class

function ToyCar(carDetails) {
	this.name = carDetails.name;
	this.price = carDetails.price;
	this.color = carDetails.color;
} //define the ToyCar class

let ToyFactoryObject = new ToyFactory();
ToyFactoryObject.createToy({
	toyType: "car",
	color: "blue",
	price: 12,
	name: "honda",
});

console.log(ToyFactoryObject.toy);
