import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './Chat.css'
import {SearchOutlined, MoreVert} from '@material-ui/icons';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
 
function Chat() {
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
            
            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Sara</span>
                    This is a message
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat_message chat_receiver">
                    <span className="chat_name">Mink</span>
                    This is a message
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>

            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input 
                        placeholder="Type a message"
                        type="text"
                        />
                    <button type="submit">
                        Send a message
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat;
