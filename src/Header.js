import React from 'react';
import logo from "./Images/b-mail-logo.png";
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header(props) {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())

        })
    };

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src={logo} alt=""/>
            </div>

            <div className="header__middle">
                <SearchIcon/>
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon className="header__inputCaret"/>
            </div>
            
            <div className="header__right">
                <IconButton >
                    <AppsIcon />
                </IconButton>
                <IconButton >
                    <NotificationsIcon />
                </IconButton>
                <IconButton >
                    <SettingsIcon />
                </IconButton>
                <IconButton >
                    <Avatar onClick={signOut} src={user?.photoUrl} />
                </IconButton>
            </div>
        </div>
    );
}

export default Header; 