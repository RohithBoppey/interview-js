// pass by ref
function modifyArray(arr){
    arr.push(69)
    return arr;
}

let arr = [1,2,3]
let arr2 = modifyArray(arr)

console.log(arr)
console.log(arr2)
