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
*/

const count = require('./basics'); //the ./ goes to the current directory

count([1,2,3,4]);
