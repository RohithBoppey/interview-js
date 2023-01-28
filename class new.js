class Student{
    constructor (name, roll_number, specification){
        this.name = name,
        this.roll_number = roll_number,
        this.specification = specification
    }
    display(){
        return [this.name, this.roll_number, this.specification].join(" ");
    }
}

let s1 = new Student("Rohith Boppey", "S20200010042", "Course")
let s2 = s1;
s2.name = "Sreyas"

console.log(s1.display());
console.log(s2.display());