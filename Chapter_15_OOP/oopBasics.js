/**
 * Class syntax in JS is similar to java syntax
 * 
 * JS however provides a prototype which the class uses
 */

class User {
    //= is to set default value
    constructor(name = "user", password = "123") {
        this.username = name;
        this.password = password;
    }

    login(password) {
        if(this.password === password)
           return "User has logged in"
        else   
           return "User has failed"
    }
}

const user1 = new User();
console.log(user1)
console.log(user1.login("123"))
