// temporal dead zone
function f1() {
    a = 3;
    // let a;
    // const a;
    // var a;
    let a // no error
    console.log(a)
}

a = 3
// const a // throws an error
// let a // throws an error due to TDZ
var a // doesnt throw an error 
console.log(a);
f1()