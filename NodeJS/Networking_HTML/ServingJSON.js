/*
* To serve JSON encode as text/JSON
* You can convert an nobject into JSON format w/ JSON.stringify()
*/

const http = require('http');

const server = http.createServer( (req, res) => {
  res.writeHead(200, '127.0.0.1');
  let todo = {
    Task1: 'Laundry',
    Task2: 'Homework'
  };
  res.writeHead(200, {'Content-Type' : 'text/JSON'});

  res.end(JSON.stringify(todo));
});

server.listen(3000, '127.0.0.1')
console.log('listening to port 3000');
