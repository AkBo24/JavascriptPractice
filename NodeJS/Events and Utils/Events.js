/*
* Events are "exported" with the event module (module is node js library)
*
* In node the on() is equivelant to the HTML addEventListener() method
*   Takes two parameters ("eventListenerName", callBackFunction(){})
*
* To evoke the event call the emit() function which takes 2 params:
*   1) the event event name
*   2) the function name & and any required params
*
*/

/* Accessing the events module and creating and EventEmitter*/
var event = require("events");
let myEvent = new event.EventEmitter();


/*Creating the event listener and then calling the event*/
myEvent.on('SomeEvent', (a,b) => {
  console.log(a+b);
});

myEvent.emit('SomeEvent', 4,3);
