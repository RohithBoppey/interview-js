var a = {a: 1, b: 1}

var b = a;
b = {...b, d: 1}

console.log(a, b)

function add(...numbers){
    // numbers is an object
    console.log(numbers);
    console.log(typeof(numbers));
    let sum = 0;
    for(let i of numbers){
        sum += i    
        // console.log(i);
    }
    return sum;
}

console.log(add(1,2,3,4,5));
console.log(add(1,2,3,4,5,9,10,11));


