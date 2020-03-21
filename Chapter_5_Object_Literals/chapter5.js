//Object literals in JS
let user = {
    name  : 'John Doe',
    email : "johndoe@domain.com",
    games : ["Hallow Knight", "Dragon Quest V"],
    logged: false,
    
    //creating method:
    login () {
        console.log('user logged in');
        isLogged = true;
    },

    login () {
        console.log('user logged out');
        isLogged = false;
    },
    //In js, can't directly access fields; use this keyword
    isLogged () {
        console.log(this.logged);
    },

    getGames () {
        console.log(`${this.name} owns these games:`);
        this.games.forEach(games => {
            console.log(games);
        })
    }
};

console.log(typeof user);
//access attributes
console.log(user.games[0]); //dot notation
console.log(user['name']);
//Calling methods
user.login();
user.getGames();