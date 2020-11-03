import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './Chat.css'
import {SearchOutlined, MoreVert} from '@material-ui/icons';
import AttachFileIcon from '@material-ui/icons/AttachFile';
 
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
            
        </div>
    )
}

export default Chat;
