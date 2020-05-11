/*
* Serving HTML is the same as piping a normal text, rather the encoding should be
* text/html instead of text/plain
*/

const http = require('http');
const fs   = require('fs');

const readableStream = fs.createReadStream('website.html', 'utf8');
const server = http.createServer((req, res) => {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type' : 'text/html'});
  readableStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');
