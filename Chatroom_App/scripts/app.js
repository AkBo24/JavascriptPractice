const chats      = document.querySelector(".chat-list");
const userMssg   = document.querySelector(".new-chat");
const updateName = document.querySelector(".new-name");
const changeRoom = document.querySelector(".chat-rooms");

console.log(changeRoom)

let currName = localStorage.getItem('username');

if(currName == null)
    currName = 'anon';

const chatUI = new ChatUI(chats);
const chatroom = new Chatroom('#gamers', currName);

chatroom.getChats(data => chatUI.render(data));

userMssg.addEventListener("submit", e => {
    e.preventDefault();
    const newMessage = userMssg.message.value.trim();
    chatroom.addChat(newMessage)
        .then(() => userMssg.reset())
        .catch(err => console.log(err))
})

updateName.addEventListener("submit", e => {
    e.preventDefault();

    const newName = updateName.name.value.trim();
    chatroom.setUserName(newName);
    console.log(`new name: ${newName}`)
    localStorage.setItem('username', newName);

});

changeRoom.addEventListener("click", e=> {
    if(e.target.tagName === "BUTTON") chatUI.clearList();
    const newRoom = e.target.getAttribute('id');
    chatroom.setRoom(newRoom);
    chatroom.getChats(chat => chatUI.render(chat));
});