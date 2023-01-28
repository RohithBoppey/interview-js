var a = 5;
global.a = a;

(() => {
    a = 2;
    global.a = 7
})()

console.log(global)

var b = 6