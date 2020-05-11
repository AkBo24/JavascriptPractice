/*
*  Require the http module
*
*  Long method to create a server:
*       1) Create an event listener on the http object
*       2) Inside the callback function do something
*
*  Shorthand method to create a server:
*       http.createServer( (request, response) => {} );
*       1) Req can be the incoming message from the server
*       2) Res is a listener which looks for an event emiter
*
*
*  The createServer() method returns a Server object is an event emitter.  The
*  Shorthand method creates the event emitter without the need of the manually
*  attaching an event emitter.
*
*
*  To add data to the server's head: http.writeHead(*status*, {'Content-Type': *json, plain-text etc*});
*
*  To connect to a server: http.listen(port-number, ip-address);
*
*/

var http = require('http');

//Long Method (attaching an event emitter to the server)
/*
const server = http.createServer();
server.on('request', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
});
*/

//Shorthand Method (under the hood, node js attaches the event emitter)
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.end('We did it reddit!');
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');
