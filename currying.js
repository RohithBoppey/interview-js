function fn(){
    return function(a){
        return function(b){
            return a + b;
        }
    } 
}

let r = fn()(4)(3)
console.log(r);

function fn1(){
    return function(a){
        return function(b){
            return fn()(a)(b);
        }
    }
}

r = fn()(1)(6)
console.log(r);
