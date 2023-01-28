function counter() {
    var counter = 2;

    return {
        add: function (increment) {
            counter += increment;
        }, 
        returnCounter: function () {
            return counter;
        }
    }

}


var c = counter();
console.log(c.returnCounter());
c.add(5);
console.log(c.returnCounter());

var d = counter();
c.add(15);
console.log(c.returnCounter());
