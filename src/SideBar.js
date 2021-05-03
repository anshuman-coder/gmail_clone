import React from 'react';
import './SideBar.css';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import SideBarOption from './SideBarOption'
function SideBar(props) {
    return (
        <div className="sidebar">
            <Button 
            className="sidebar__compose"
            startIcon ={<AddIcon fontSize='large'
            />}
            >
                Compose
            </Button>

            <SideBarOption Icon={InboxIcon} title="Inbox" number={54} />
        </div>
    );
}

export default SideBar;