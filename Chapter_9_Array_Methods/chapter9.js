/**
 * Array Methods: filter
 * 
 * Filter is a callback method that can give access to individual elements
 */

 const people = [
     {name: "Ak", age: 19},
     {name: "Padmaja", age: 50},
     {name: "Prasad", age: 55},
     {name: "Padmaja", age: 26}
 ]

 const older = people.filter(person => {
    return person.age > 30;
 });

 console.log(older);