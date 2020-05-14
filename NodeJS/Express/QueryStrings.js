/*
* Query Strings are requests for a server to parse data and return the result
*      Ex: localhost:3000/contact?name=Akshay%Bodla&dept=security
*          here we ask the server to find the profile with the name Akshay Bodla
*          within the security department
*
* To access these queries: response.query.*variable name*
*      To send all of the search terms to an engine send res.query
*
*/

const express = require('express');
const server  = express();

server.use('/css', express.static('css'));
server.get('/', (req, res) => {
  res.render('website.ejs');
});

server.get('/form', (req, res) => {
  res.render('form.ejs', {profile: req.params.id, query: req.query});
});
server.listen(3000, '127.0.0.1')
