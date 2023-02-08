const obj = {
	name: "Rohith Boppey",
	getName: function () {
		return `Your name is ${this.name}`;
	},
};

const myName = obj.getName();
console.log(myName);

// overwriting it
const obj2 = {
    getNewName: function (){
        return `I'm sorry, you have no name!`
    }
}

Object.setPrototypeOf(obj2, obj);
prototypeProperties = Object.getPrototypeOf(obj2);
console.log(obj2)
console.log(prototypeProperties);
console.log(typeof(prototypeProperties))