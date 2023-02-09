// pass by ref
function modifyArray(arr){
    arr.push(69)
    return arr;
}

let arr = [1,2,3]
let arr2 = modifyArray(arr)

console.log(arr)
console.log(arr2)

// pass by value
function modifyArrayByvalue(arr){
    // let a  = Array.from(arr);
    let a = [...arr]
    a.push(69)
    return a;
}

arr = [1,2,3]
arr2 = modifyArrayByvalue(arr)

console.log(arr)
console.log(arr2)


