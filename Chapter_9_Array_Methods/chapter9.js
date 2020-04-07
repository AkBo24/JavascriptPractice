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

/**
 * Array Method: Reduce
 * 
 * A nondestructive method that iterates through the given array
 * and produces a single value (such as a total, or a count)
 * 
 * Reduce takes two methods: the first is a call back function, 
 *                           the second is a value given to the callback 
 */

 const farmers = [
     {name: "Colt", numOranges: 30},
     {name: "Wyatt", numOranges: 3000020},
     {name: "Hudson", numOranges: Math.PI},
     {name: "Grant", numOranges: 21323}
 ]

 const totalOranges = farmers.reduce((count, person) => {
    return count + person.numOranges;
 }, 0); //the zero initializes count: count = 0

 console.log(totalOranges + " oranges");

 /**
  * Array Method: Find
  * 
  * This method returns the first instance within an array that 
  * passes a certain condition
  * 
  * For instance, the first 100% in an array of scores
  */

  const scores = [88,33,13,44, 99, 92, 331,4];

  const firstAbove90 = scores.find( score => score>90 );
  console.log(firstAbove90);