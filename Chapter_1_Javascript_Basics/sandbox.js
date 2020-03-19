// alert("This got updated!");

//Log to website console
// console.log("Logging to console!");

//Variable Types:
let age = 19; //normal java variable
const yearBorn = 2019; //java's final modifier
var year = 2020; //older way of variable, let preferred

//Common Javascript String methods
let email = "akshaybodla21@gmail.com";

//.lastIndexOf() - gets the last instance of that character
console.log(email.lastIndexOf("a"));

//.slice() - java's .substring()
//last pos inclusive
console.log(email.slice(0,3));

//.substring() - 2 args: pos to start at, #of characters to get
//NOT LIKE JAVA SUBSTRING!!!
console.log(email.substr(5,3));

//.replace() - replace the first instance of this chara with other
console.log(email.replace('@','#'));

//Template Literals - different ways to concatenate strings
let name = "Akshay";
let str  = `${name}'s email is ${email}`;
console.log(str);

//Array Methods
let people = ["obama","me", "you"];

//.join() creates a string literal with the passed in argument as seperator
console.log(people.join(", "));
//.indexOf() - self explanatory
console.log(people.indexOf("obama"));
//.concat() - explanatory
//.push() - adds a new value
people.push("romney");

//.pop() - removes item @ end of array
people.pop()
console.log(people.join(", "));

//loose comparision (diff types can still be equal)
console.log(25 == '25'); //returns true

//strict comparision (dff types can not be equal)
console.log(25 === 25); //true
console.log(25 === '25'); //false: second thing is a string
console.log(25 !== '25'); //true

//Type Conversion

//check type of something:
console.log(typeof 1); //1 is a number

//String -> number (int, double etc)
let score = '100';
console.log(Number(100)+1); //returns 101

//Number -> string use Number('string literal')

//For Loop - syntax is the same
// for(let i = 0; i < 3; i++) {
//     console.log(i+1);
// }

//While loop - syntax is the same
// let i = 0;
// while(i < 3) {
//     console.log(i);
//     i++
// }

//Do While loop has same syntax
//if statements - exactly the same wow