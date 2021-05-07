import { Checkbox, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
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
import { db } from './firebase';

function EmailList(props) {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails').orderBy('timestamp','desc').onSnapshot(snapshot => setEmails(snapshot.docs.map(doc =>({
            id: doc.id,
            data: doc.data(),
            }))
        ));
    }, []);

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
                <Section Icon={InboxIcon} title='Primary'color='#8c2200' selected />
                <Section Icon={PeopleIcon} title='Social'color='#c9a113'  />
                <Section Icon={LocalOfferIcon} title='Promotion'color='#13c9a4'  />
             </div>

             <div className="emailList__list">
                {emails.map(({id , data: { to, subject, message, timestamp}}) => ( 
                    <EmailRow
                        id={id} 
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))} 

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
                <EmailRow
                    title="Twitch"
                    subject="hey there fellow streamer!"
                    description="This is DOPE!"
                    time="10pm"
                />
                <EmailRow
                    title="Twitch"
                    subject="hey there fellow streamer!"
                    description="This is DOPE!"
                    time="10pm"
                />
                <EmailRow
                    title="Twitch"
                    subject="hey there fellow streamer!"
                    description="This is DOPE!"
                    time="10pm"
                />
                <EmailRow
                    title="Twitch"
                    subject="hey there fellow streamer!"
                    description="This is DOPE!"
                    time="10pm"
                />
                <EmailRow
                    title="Twitch"
                    subject="hey there fellow streamer!"
                    description="This is DOPE!"
                    time="10pm"
                />
                <EmailRow
                    title="Twitch"
                    subject="hey there fellow streamer!"
                    description="This is DOPE!"
                    time="10pm"
                />
                <EmailRow
                    title="Twitch"
                    subject="hey there fellow streamer!"
                    description="This is DOPE!"
                    time="10pm"
                />
                <EmailRow
                    title="Twitch"
                    subject="hey there fellow streamer!"
                    description="This is DOPE!"
                    time="10pm"
                />
                <EmailRow
                    title="Twitch"
                    subject="hey there fellow streamer!"
                    description="This is DOPE!"
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