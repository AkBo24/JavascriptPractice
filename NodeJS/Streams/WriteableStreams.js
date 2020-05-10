/*
*  To write to a stream evoke the createWriteStream(*path to file*)
*    If path does not exist, node will create it and write to it
*
*  On the object returned by createWriteStream() then call write(data)
*   with data the buffer to write
*
*  Copying to one file to another can be shortened using Pipes
*/

const fs = require('fs');

const read  = fs.createReadStream('readme.txt');
const write = fs.createWriteStream('writeme.txt');

read.on('data', (buffer) => {
  console.log('New buffer recieved');
  write.write(buffer);
});
