//To find an element within the DOM use the .querySelector()
//Ex find the paragraph underneath "Query the DOM"
const para = document.querySelector('p'); //grabs the first p tag in the html
console.log(para);

//to get the inner text, access the innertext property:
console.log(para.innerText);

//to change the inner text, update the inner text variable:
para.innerText +=`\n This paragraph was also changed in Javascript by updating the DOM's innerText
                   property for this paragraph!`

//Query for a paragraph using a class selector (grabs the first element with the indicated class)
const para2 = document.querySelector('.query'); //the "." indicates to JS to look for a class
console.log(para2);

//A div also has the class 'query', to access use the div.class name
const div = document.querySelector('div.query');
console.log(div);

//Select all of some type
const paras = document.querySelectorAll('p');
console.log(paras);

//to change/update every element in the DOM (that the instance of the particular element)
paras.forEach(element => {
    paras.innerText += "This paragraph was updated using Javascript!";
});

//inside DOM paras is an array, methods are unavaible, but can still access elements inside Node List - like an array
//w/ box notation
console.log(paras[0]);
//for each w/paras
// paras.forEach(para => {
//     console.log(para);
// });

//get everything of a specific class
const classA = document.querySelectorAll('.query');
console.log(classA);

//query for an element by id
const getID = document.getElementById('title');
console.log(getID);

//get elements based on class name
const queryByClass = document.getElementsByClassName('query');
console.log(queryByClass); //DOM creates a HTMLCollection instead of a Node List (but similar)
//can access like an array, but can not have a for each loop

//get element by tag name'
const parasAll = document.getElementsByTagName('p');
console.log(parasAll);

const makeH2 = document.querySelector("#update");
makeH2.innerHTML = '<h2>Quering the DOM: (this html was updated in JS!)</h2>'