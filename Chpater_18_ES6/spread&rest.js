/**
 * Rest Syntax:
 * 
 * For - creating functions with unkown # of parameters
 * 
 * syntax:
 *      functionName (...params) {
 *          //do something
 *      }
 * The parameters are sent as an array
 */

const printNums = (...params) => {
    console.log(params.toString());
};

const params = printNums(9, 9.9, 3.14, 5.1, 2.2);

/**
 * Spread Syntax:
 * 
 * For - "Breaking down" an array or object into its individual elements
 * 
 * Syntax: ...*array/object name*
 */

const arr1 = ['me', 'you'];
const arr2 = [...arr1, 'i'];
console.log(arr2);

const obj1 = {name: "Ak", age: 19};
const obj2 = {last: "bo", ...obj1, hobby:"gaming"};
console.log(obj2);