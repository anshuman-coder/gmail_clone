import { Button } from '@material-ui/core';
import logo from './Images/b-mail-logo.png'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';
import { auth, provider } from './firebase';
import './Login.css'

function Login(props) {

    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({ user }) =>{
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }))
        })
        .catch(error => alert(error.message))
    };
    return (
        <div className="login">
            <div className="login_container">
                <img
                    src={logo}
                    alt=""
                />
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    );
}

export default Login;