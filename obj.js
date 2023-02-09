let x = {};
let y = {name: "Rohith Boppey"}
let z = {name: "Jaswanth Boppey"}

// passes like a string
x[y] = {name: "hello"}
console.log(x);
x[y] = z
console.log(x);

// will be accessed as
x['[object Object]'] = {name: "No name"}
console.log(x);
