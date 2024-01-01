import React from "react";
import emojiToggle from "../assets/EmojiToggle.svg";
import sendIcon from "../assets/SendIcon.svg";

function ChatTypeInput() {
  return (
    <div className="chat-input-container">
      <div className="input-emoji">
        <img src={emojiToggle} alt="" />
        <input type="message" placeholder="Type a Message" />
      </div>
      <img className="send" src={sendIcon} alt="" />
    </div>
  );
}

export default ChatTypeInput;
