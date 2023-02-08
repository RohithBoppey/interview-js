class A{
    constructor(){
        this.name = "Rohith Boppey"
    }
}

function changeName(user){
    user.age = 18;
    return user;
}

const user = new A();
const modifiedUser = changeName(user);
console.log(user);
console.log(modifiedUser);