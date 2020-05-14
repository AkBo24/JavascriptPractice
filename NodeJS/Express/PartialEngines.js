/*
*  Partial Engines allow reusability of "partial" html code
*
*  Inside the engines to access a template: <%- include(*directory*) %>
*
*/

const http    = require('http');
const express = require('express');
const app     = express();

app.use('/css', express.static('css'));

app.get('/', (req, res) => {
  res.render('website.ejs');
});

app.get('/contacts/:id', (req, res) => {
  res.render('contacts.ejs', {profile: req.params.id});
});

app.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');
