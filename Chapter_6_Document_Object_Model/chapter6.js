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

//Getting and Setting HTML attributes (hrefs, classes, ids)

//Use .getAttribute to get a reference to the element to change
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

//Use .setAttribute() to change the attribute:
//arg 1 - attribute to change, arg 2 - what to change attribute to
link.setAttribute('href', 'https://www.amazon.com');
console.log(link.getAttribute('href'));

//Changing CSS Styles
//The document object has a inner CSS property called styles which holds all of the CSS properties
console.log(link.style.color) //the color right now is empty which shows up as an empty log in the console
link.style.color = 'orange';  //if link is logged again, the color will show as orangne in the console

//Adding & Removing Classes
//The document has a classList object which has a .add() and .remove() methods
const changeSuccess = document.querySelector(".error");
console.log(changeSuccess.classList); //prints error to console
changeSuccess.classList.remove('error')
changeSuccess.classList.add('success');

//Accessing parents and children of a document element
//(the dom is structured as a tree ADT with HTML as root node) and
//each document element has a child and a parent element property
const art = document.querySelector('article');
console.log(art);

//for each is not a viable method on art currently, so change it to an array
Array.from(art.children).forEach((children) => {
    children.classList.add('article');
});

//Use .parentElement property of a child to get its parent:
console.log(art.parentElement); //Logs Body as the article's parent is the body

//Event Listener: Click
const items = document.querySelectorAll(".strike")
items.forEach(item => {
    item.addEventListener('click', e => {
        //If you want to simply edit the text you can do this:
        // if(e.target.style.textDecoration != 'line-through')
        //      e.target.style.textDecoration = 'line-through';
        // else
        //     e.target.style.textDecoration = '';

        //to delete an element a DOM object offers a .remove() method that removes
        //this object
        e.target.remove();
    });
});

const todo    = document.querySelector(".eventListener")
const prepend = document.querySelector(".prepend");
const append  = document.querySelector(".append");

prepend.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Creating a new to-do at the beginning'
    todo.prepend(li);
});

append.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Creating a new to-do at the end'
    todo.append(li);
});


//Event Bubbling and delegation
//Add the required behavior to the ul that surrounds the list
const bubbling = document.querySelector('.bubbling');
bubbling.addEventListener('click', e => {
    e.target.remove();
});

const append2 = document.querySelector(".append2");
append2.addEventListener('click', e => {
    const li = document.createElement('li');
    li.textContent = 'Creating a new todo that you can delete';
    bubbling.append(li);    
});

const createPop = document.querySelector(".createPop");
const popWrapper= document.querySelector(".popWrapper");
const pop       = document.querySelector(".pop");
const close     = document.querySelector(".closePop");

createPop.addEventListener('click', () => {
    popWrapper.style.display = 'block';
    pop.style.display        = 'block';
    close.style.display      = 'block';
});

close.addEventListener('click', () =>{
    popWrapper.style.display = 'none';
    pop.style.display        = 'none';
    close.style.display      = 'none';
});