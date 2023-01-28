// without class
function Student(name, roll_number, specification){
    this.name = name,
    this.roll_number = roll_number,
    this.specification = specification
}

// adding a new method
// cannot use arrow because of it points to global
Student.prototype.printAllDetails = function() {
    return [this.name, this.roll_number, this.specification].join(' ')
}

let s1 = new Student("Rohith Boppey", "S20200010042", "Computer science")
let s2 = s1;
console.log(s1);
console.log(typeof(s1));

// changing name to diff, changing for s1 as well
// PASS BY REFERENCE
s2.name = "Sreyas"
console.log(s1);
console.log(s1.name === 'Sreyas');

console.log(s1.printAllDetails())
console.log(s2.printAllDetails())
