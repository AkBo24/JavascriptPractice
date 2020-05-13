/*
*  Express allows an easier way to create servers and create routes
*
*  Previously we had to string if statements to create routes, but Express
*  provides HTTP verbs (HTTP methods) that can individually evoke call-back
*  methods to handle the verbs
*
*  To create an instance of the express class evoke the express() like below
*     1) app.get('route', () => {})
*     2) app.delete('route', () => {})
*     3) app.post('route', () => {})
*     4) app.put('route', () => {})
*
*  These methods correlate to the data sent by a client to the server (for \
*  instance .get() represents the routing url entered by the browser)
*
*  To send data to the browsser: send(*data*)
*
*  To read from a an external file (eg an HTML file): sendFile(*dir name*)
*
*/

const express = require('express');
const app     = express();

app.get('/', (req, res) => {
  res.send('Writing using express and now nodemon');
});

app.get('/contact-us', (req, res) => {
  const contact = {name1: 'Akshay Bodla'};
  res.send(JSON.stringify(contact));
});


/*
*
* Route params: the req object provided by servers has a params field that
* we can use to access certain parts of a get request
*
* For instance if a user puts in a profile name into the url we can access that
* w/ req.params.name
*
* In the routing url we can use wild cards to provide a "blanket route"
*
*/

app.get('/profile/:id', (req, res) => { //the ":" indicates a variable
  res.send(`You accessed the id: ${req.params.id}`);
});

app.listen(3000);
console.log('Listening to port 3000');
