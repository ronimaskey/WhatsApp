import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from "react";
import './Chat.css'
import {SearchOutlined, MoreVert} from '@material-ui/icons';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from "./axios";
 
const Chat = ({ messages }) => {
    const [input, setInput] = useState("");
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      await axios.post("/messages/new", {
        message: input,
        name: "Rara",
        timestamp: "Time Now",
        received: true,
      });
  
      setInput("");
    };
    return (
        <div className="chat">

            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at..</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            
           
      <div className="chat__body">
        {messages.map((message, i) => {
          return (
            <p
              key={i}
              className={`chat__message ${
                message.received && "chat__reciever"
              }`}
            >
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">{message.timestamp}</span>
            </p>
          );
        })}
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
