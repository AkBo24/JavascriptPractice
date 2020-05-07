/**
 * Sets in JS are the same as Java: doesnt allow dupes
 * 
 * Size is not a method
 * Has for contains
 * Add, well to add
 */

const set1 = new Set(['ff',89,true,'ff']);

console.log(set1, set1.size); //size is an attribute, not method

console.log(set1.has('ff'));