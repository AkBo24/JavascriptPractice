const form     = document.querySelector(".signup");
const username = form.username;

form.addEventListener('submit', e => {
    e.preventDefault();
    //username.value gives access to what the user types into the box

    //RegEx are contained in two "/" (Regular Expression)
    //regEx offer a .test method that checks whether the passed in argument
    //satisfies the regEx
    const regEx = /^[a-z]{6,}$/;
    let  result = regEx.test(username.value);
    if(result)
        console.log(result);
});