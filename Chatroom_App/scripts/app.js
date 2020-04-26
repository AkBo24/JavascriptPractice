const chats    = document.querySelector(".chat-list");
const userMssg = document.querySelector(".new-chat");
const updateName = document.querySelector(".new-name");

console.log(updateName.name)

const chatUI = new ChatUI(chats);
let chatroom = null;

if(localStorage.getItem('username') == null)
    chatroom = new Chatroom('#gamers','anon');
else   
    chatroom = new Chatroom('#gamers', localStorage.getItem('username'));


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