class Text{
    constructor(text){
        this.text = text;
    }
}

const applyStylesFunction = function (t) {
    const text = {...t};
    text.style = "Bold";
    text.font = "Times New Roman";
    return text;
}

const addNewHeading = function (text, heading){
    text.heading = heading;
    return text;
}

const text = new Text("This is Rohith");
const heading = addNewHeading(text, "This is a new heading");
const styledText = applyStylesFunction(text);

// Though one is being changed all others are having the same changes
console.log(heading);
console.log(styledText);
console.log(text);

// Can use spread operator like above to manage