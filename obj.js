let x = {};
let y = {name: "Rohith Boppey"}
let z = {name: "Jaswanth Boppey"}

// passes like a string
x[y] = {name: "hello"}
console.log(x);
x[y] = z
// will be accessed
x['[object Object]'] = {name: "No name"}
console.log(x);
