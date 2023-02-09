// we can use private by using return instead of normal
var someClass = (function(){
    var contents = 0;
    function f(){
        contents++;
    }

    // dealing with private like this
    return {
        increment: function(){
            f();
            console.log(`incremented, now: ${contents}`);
        }
    }
})();

someClass.increment();
someClass.increment();
someClass.increment();
someClass.increment();
console.log(someClass.contents)