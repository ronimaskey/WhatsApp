import React from 'react'
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {Avatar, IconButton} from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
