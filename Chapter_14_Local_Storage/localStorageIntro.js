/**
 * JS provides the localStorage native api which stores data locally for any
 * website
 * 
 * This data is not lost when the page is reloaded or even closed
 * 
 * 
 * The API provides 
 *  1. .setItem(key, value): store the data using a key value pair
 *  2. .getItem(key): return the value stored by this key
 *  3. update an item using .setItem(arg1, arg2)
 * 
 * 
 * Note: Everything passed into local storage is returned as a string, so parsing necessary
 * when retrieving
 */

localStorage.setItem("i1", "Chimera Wing");
localStorage.setItem("i1Stock", 50); //50 will be casted to a string

console.log("Item 1: ", localStorage.getItem("i1"));
console.log("Item 1 Stock: ", localStorage.getItem("i1Stock"));

console.log("Item 1 Stock var type: ", typeof localStorage.getItem("i1Stock"));