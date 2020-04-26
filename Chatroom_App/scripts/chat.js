
class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = database.collection('Chatroom');
    }

    /**
     * Add a message to the chatroom database
     * @param {string} message 
     */
    async addChat(message) {
        const now = new Date();

        //create the mssg object to add to the database
        const mssg = {
            message,
            room: this.room,
            username: this.username,
            createdat: firebase.firestore.Timestamp.fromDate(now)
        }

        //use the chats var which holds the reference to the collection
        //object
        const addMssg = await this.chats.add(mssg);
    }
}

const chatroom = new Chatroom("#gamers", "#me");
chatroom.addChat("First chat message");