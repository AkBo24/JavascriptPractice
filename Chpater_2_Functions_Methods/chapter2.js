// alert("js is working");

//Function Declararation:

function greet() {
    console.log("Good Morning!");
}
greet();

//Function Expressions:
let morning = function () {
    console.log("Hello There!");
};
morning();

//Difference: Function Expressions can not be declared below their use 
//where declarations can be used b4 declaration

//Add default arguments to parameter list in function expressions:
let greetings = function(name = "luigi", time = "morning") {
    console.log(`Good ${time} ${name}`);
};
greetings();//Will log Good morning luigi

//Functions do not need a declared return type, just return a value
let circArea = function(radius) {
    let area = 3.14 * radius**2;
    return area;
};
console.log(circArea(10));

// Arrow Function - shorthand way of writing a function expression
// if 1 parameter is needed, parethesis around the parameters can be removed
// "this" key word works differently w/the arrow function
let boxArea = (length, width) => { return length*width; };
console.log(boxArea(10,10));

// boxArea can be shorted to the following syntax
// let boxArea = (length, width) => length*width; //no return keyword needed, value automatically returned
