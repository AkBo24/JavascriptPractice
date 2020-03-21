//Object literals in JS
let user = {
    name: 'John Doe',
    email: "johndoe@domain.com",
    games: ["Hallow Knight", "Dragon Quest V"],
    
    //creating method:
    login: function() {
        console.log('user logged in');
    }
};

console.log(typeof user);
//access attributes
console.log(user.games[0]); //dot notation
console.log(user['name']);
user.login();