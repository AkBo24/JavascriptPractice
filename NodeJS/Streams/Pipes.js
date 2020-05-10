/*
*  Pipes allow to streams to directly write a readable stream to a readable
*  stream
*
*  Instead of calling the write method from on a created writable stream,
*  call pipe(writableStream) on a readable stream and pass in a writable stream
*
*/

const fs = require('fs');

const read  = fs.createReadStream('readme.txt');
const write = fs.createWriteStream('pipeWriteMe.txt');

read.on('data', (buffer) => {
  console.log('new buffer packet recieved');
  read.pipe(write);
});
