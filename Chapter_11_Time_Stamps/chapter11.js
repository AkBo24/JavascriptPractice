/**
 * Javascript has the time object 
 * which has all of the following methods
 */

 const time = new Date();

 console.log(time);
 console.log(time.toDateString());
 console.log(time.toTimeString());
 console.log(time.toLocaleDateString())
 console.log(time.getFullYear());

 console.log(time.getHours());
 console.log(time.getMinutes());
 console.log(time.getSeconds());
 console.log(time.getTime());

 /**
  * The time object has two param constructors
  * 1 where you can pass a string in a date format
  * 2 where you can pass in a timestamp
  */

  const param1 = new Date ("March 3rd 1999 2:22:22");
  const param2 = new Date(param1.getTime());