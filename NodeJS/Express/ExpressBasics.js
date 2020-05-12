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
*/

const express = require('express');
const app     = express();

app.get('/', (req, res) => {
  res.send('Writing using express and now nodemon');
});

app.listen(3000);
