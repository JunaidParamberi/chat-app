import React from "react";
import "./chat.css";
import ChatList from "../component/ChatList";
import ChatBox from "../component/ChatBox";

function Chat() {
  return (
    <div className="chat-container">
      <ChatList />
      <ChatBox />
    </div>
  );
}

export default Chat;
