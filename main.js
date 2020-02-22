//var, let, const - three types of variables in java

//var - dont use

//let - allows reasinging 
let z = 30;
z = 31;

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


