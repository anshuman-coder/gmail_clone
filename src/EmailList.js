import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import EmailRow from './EmailRow';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings';
import './EmailList.css';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from './Section';

function EmailList(props) {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>

                
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon} title='Primary'color='red' selected />
                <Section Icon={PeopleIcon} title='Social'color='#1A73EB'  />
                <Section Icon={LocalOfferIcon} title='Promotion'color='green'  />
             </div>

             <div className="emailList__list">
                <EmailRow
                    title="Twitch"
                    subject = "Hey fellow streamer"
                    description="This is a test"
                    time="10pm"
                />
                <EmailRow
                    title="Twitch"
                    subject="hey there fellow streamer!"
                    description="This is DOPE!"
                    time="10pm"
                />
             </div>
        </div>
    );
}

export default EmailList;