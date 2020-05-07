/**
 * Symbols are a primitive data type
 * No two symbols are ever equal to each other
 *   useful for keys value pairs
 * 
 * DO NOT USE THE NEW KEYWORD
 */

const s1 = Symbol("something generic");
const s2 = Symbol("something generic");

console.log('s1:', s1, 's2:', s2);
console.log('symbol 1 === symbol2: ', s1===s2);