/*
* Node JS Basics
*
* HTML: add multiple scripts to a single file to get access to different classes etc
*
* Node JS: we have to export functions, etc to make them accessible to other files
* The files that need access to others must require them
*
* To export things use: module.exports = variable name, class name etc
* To import things into a file use: require('FILE_PATH');
*   Require returns an object given by the directory/module name, then the
*   variable becomes a reference from which we can use methods, vars etc if they
*   are exported
*/

const stuff = require('./exports'); //the ./ goes to the current directory

const array = [0,1,2,3,4,5];

console.log(stuff.add(array));
console.log(stuff.count(array));
