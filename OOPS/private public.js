// we can use private by using return instead of normal
function someClass(){
    var contents = 0;
    function f(){
        contents++;
    }

    return {
        increment: function(){
            f();
            console.log(`incremented, now: ${contents}`);
        }
    }
}

var v = someClass();
v.increment()
v.increment()
console.log(v.contents)