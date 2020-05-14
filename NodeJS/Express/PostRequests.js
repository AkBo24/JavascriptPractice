/*
*  Post Requests: Info sent back and stored to the server (like queries)
*
*  When a client/browser returns data to the server they are stored in the
*  middleware, however we need the body-parser pkg
*
*  To parse post requests for route-specific:
*     let urlencodedParser - bodyParser.urlencoded( {extended: false} );
*
*  To handle a post request:
*     app.post(*route*, urlencodedParser, (req, res) => {});
*
*     The urlencodedParser enables req to store post requests w/ req.body
*     Any data is stored as an array
*     Send the data with .render(*template engine*, {data: req.body});
*
*/

const express = require('express');
const server  = express();
const bodyParser = require('body-Parser');

let urlencodedParser = bodyParser.urlencoded( {extended: false} );

server.use('/css', express.static('css'));
server.get('/', (req, res) => {
  res.render('website.ejs');
});

server.get('/form', (req, res) => {
  res.render('form.ejs', {profile: req.params.id, query: req.query});
});

server.post('/form', urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render('form-success.ejs', {data: req.body});
});

server.listen(3000, '127.0.0.1');
