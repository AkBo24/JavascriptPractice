const form  = document.querySelector(".signup");
const div   = document.querySelector(".feedback");
const input = document.querySelector("#username");
const regEx = /^[a-z]{6,}$/;
let username;

form.addEventListener('submit', e => {
    e.preventDefault();
    //username.value gives access to what the user types into the box
    //otherwise use e.target.username.value to get what's typed
    username = form.username;

    //RegEx are contained in two "/" (Regular Expression)
    //regEx offer a .test method that checks whether the passed in argument
    //satisfies the regEx
    //  allow only characters a-z and at least 6 char long
    let  result = regEx.test(username.value);
    if(result)
        div.textContent = `${username.value} is a valid username`;
    else 
        div.textContent = `${username.value} is not a valid username`;

});

//Dynamic feedback: let the user know if the user name is valid while they type
form.username.addEventListener('keyup', e => {
    const username = e.target;
    let  result = regEx.test(username.value);
    
    if(result) {
        form.username.setAttribute('class', 'valid');
    }
    else {
        form.username.setAttribute('class', 'invalid');
    }
    
});