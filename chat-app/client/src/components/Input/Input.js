import React from "react";
import "./Input.css";

export default function Input({message,setMessage,sendMessage}) {
  return (
    <div className="form">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        className="input"
        placeholder="Type a message.."
      />
      <button className="sendButton" onClick={(e)=>sendMessage(e)}>Send</button>
    </div>
  );
}
