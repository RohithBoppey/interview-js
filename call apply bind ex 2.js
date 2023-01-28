console.log(2 == '2');
console.log(2 === '2');
console.log('S' + 1);
console.log(1/0);

const a = {
    name: "Rohith",
    age: [],
    sayHello: function(){
        return "hello " + this.name;       
    }
}

const b = {
    name: "Jaswanth",
    age: [],
    sayHello: function(age, phone_number){
        return "hello " + this.name + " " + age + " " + phone_number;       
    }
}

const r = b.sayHello.bind(a, 20, '9533666898')
const res = r();
console.log(res)