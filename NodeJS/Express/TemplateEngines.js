/*
* Template engines provides a dynamic way to update websites based on user
* requests
*
* This template requires the ejs template engine
*
* To inject HTML the response object has to send the file w/ sentFile(dirpath);
*
* Template engines are marked by the .ejs extension
*
* To render them with express: app.render(*file name*, *any params*)
*   The params are an object as such: {objName: variable}, inside the ejs we
*   acess the variable w/objName
*/

const express = require('express');
const ejs     = require('ejs');
const app     = express();
const server  = express();

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}\\website.html`)
});

app.get('/profiles/:id', (req, res) => {
  res.render(`${__dirname}\\profiles.ejs`, {profile: req.params.id, id: 233});
});

app.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');
