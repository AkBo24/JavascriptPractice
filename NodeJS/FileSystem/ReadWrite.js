/**
*  To read write: require the fs module
*
*  The read and write methods have a sync and async versions
*
*  Sync:
*     1) readFileSync(*fileName*, *character set*);
*     2) writeFileSync(*fileName*, *string data to write*);
*
*  Async
*     1) readFile(*fileName*, *character set*, (err, data) => {});
*     2) writeFileSync(*fileName*, data , (err) => {});
*        where data is the string to put into the file
*
*  For write file, if it doesn't exist, node will create it
*/

const fs = require("fs");

/* Writing and reading files synchronously */
// const read = (fs.readFileSync("readMe.txt", "utf8"));
// console.log(read);
// fs.writeFileSync("result.txt", read);

fs.readFile('readMe.txt', 'utf8', (err, data) => {
  console.log(data);
  fs.writeFile('result.txt', data, (err) => console.log(err) );
});
