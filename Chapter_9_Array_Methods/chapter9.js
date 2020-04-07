/**
 * Array Method: filter
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

 /**
  * Array Method: Map
  * 
  * Map is also a callback method that iterates through the entire array
  * and returns a  new array with the results for everything in the 
  * origininal array
  */

const items = [
    {name: "apples", price: 30, isSale: true},
    {name: "oranges", price: 300, isSale: false},
    {name: "tv", price: 1, isSale: true},
    {name: "computer", price: 4440, isSale: true},
    {name: "pencil", price: 0.125, isSale: true}
]

const sale = items.map(item =>{

    if(item.isSale)
        return {name: item.name, price: item.price/2};
    else
        return item

});

console.log(sale);