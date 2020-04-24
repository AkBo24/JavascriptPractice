/**
 * JS still uses the extends keyword to provide inheritance
 */
const u1 = new User("u1","456");
class Admin extends User {
    constructor(name= "admin", password = "root", 
                users = [u1, new User()]) {
        super(name, password);
        this.users = users;
    }

    deleteUser(target) {
        this.users = this.users.filter(u => u !== target);
    }
}

const adm = new Admin();
adm.deleteUser(u1);
console.log(adm);