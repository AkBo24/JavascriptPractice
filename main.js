//var, let, const - three types of variables in java

//var - dont use

//let - allows reasinging 
let thing = 30;
thing = 31;

//const - constant variable in java
//always use unless variable is gauranteed to be changed
//ex:
const MAX_GAME_SCORE = 90;

//data types: directly assinged to memory not a resource
//String, Numbers, Boolean, null, jundefined, Symbol

const name  = 'James';
const age   = 9;
const isMan = true;
const x     = null;
const y     = undefined;
// y = 8; does not work bc y is constant
let z;



//typeof statement checks if x is a typeof y
console.log(typeof name);

//typeof null returns object wich is incorrect
//due to the way javascript is written
//typeof y & z is undefined

//Template String - works similarly to concatation
//use ${*name of variable*}
//ex: (prints My name is not James and I am older than 9)
console.log(`My name is not ${name} and I am older than ${age}`);

//String basics
//.length (IS NOT A METHOD IN JAVASCRIPT)
//.substring() works as intended
//.spit('*argument*') spits a string into an array based on the deliminator
const test = 'hi, example, word';
console.log(test.split(', '))

//Array basics (ARRAYS ARE NOT STATIC SIZE)
//diff ways to initalize arrays
const terstArray = new Array(1,2,3);
const fruits = ['apples', 'bannanas', 'oranges'];
//can have multiple types inside arrays
const test3Array = [1, true, 'c', null];
//access an element
console.log(fruits[1]);
//add to array
fruits.push('strawberries');
//add to front
fruits.unshift('cherries');
//array supports .pop();


