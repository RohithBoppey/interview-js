// helpful during imports

const a = {name: 'Rohith', age: 20}
const {name: Myname, age} = a;
console.log(Myname, age);

const b = [
    {
        quote: "Honesty is the best policy",
        author: "R"
    },
    {
        quote: "Live life like there is no tomorrow",
        author: "R"
    }
]

const [q1, q2] = b
console.log(q1, q2)