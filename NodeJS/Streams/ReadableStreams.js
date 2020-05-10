/*
*  Streams in JS have data sent as packages, with a buffer to ensure some data
*  is transfered when the network is down
*
*  Streams require the FS module
*
*  To read streams evoke the createReadStream(*directory path*, *character encoding*)
*     1) Directory Path - the path to the file to read from
*     2) (Optional) Character Encoding - how to read the buffer
*
*  createReadStream() returns an object that inherits from event emitter,
*  and has a event emitter for data
*
*  To return the stream, call the on() function for 'data'
*
*  If param #2 of createReadStream() is not included, it will return packet
*  objects inherited from buffer, and not a readable text
*/

const fs = require('fs');

const stream = fs.createReadStream('readme.txt', {encoding: 'utf8'});

stream.on('data', (buffer) => {
  console.log('New buffer packet recieved:');
  console.log(buffer);
});
