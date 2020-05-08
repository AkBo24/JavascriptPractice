/*
* Util is another package that allows lots of functions like inheritance
*/

var events = require("events");
var utils  = require("util");

class Person {
  constructor(name = "jane doe") {
      this.name = name;
  }
}

utils.inherits(Person, events);

const ppl = [new Person("kim"), new Person("me"), new Person("floyd")];
ppl.forEach( (person) => {
  person.on('speak', (quote) => {
    console.log( `${person.name} says ${quote}`);
  });
});

ppl.forEach( (person) => {
  person.emit('speak', 'hey!');
});
