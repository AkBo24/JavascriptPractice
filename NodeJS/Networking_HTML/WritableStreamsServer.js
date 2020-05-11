/*
*  The response parameter when creating a server is a writable stream from
*  which we can write data to using a pipe (readablestream.pipe(response))
*/

const http = require('http');
const fs = require('fs');

const read = fs.createReadStream('readme.txt');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  read.pipe(res);
});

server.listen(3000, '127.0.0.1')
console.log('Listening to port 3000');
