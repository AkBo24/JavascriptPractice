const chats = document.querySelector(".chat-list");

const chatUI = new ChatUI(chats);
const chatroom = new Chatroom('#gamers','sultan');

chatroom.getChats(data => chatUI.render(data));