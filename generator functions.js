function* genFunc(){
    yield 3;
    yield 4;
}

let genFuncObj = genFunc();

// use next and next
let status = genFuncObj.next()
console.log(status);