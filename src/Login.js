import { Button } from '@material-ui/core';
import logo from './Images/b-mail-logo.png'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';
import { auth, provider } from './firebase';
import RingLoader from "react-spinners/RingLoader";
import './Login.css'

function Login(props) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        },3000)
      }, [])

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
                <Button onClick={() => setLoading(loading)} variant="contained" color="primary" onClick={signIn}>Login</Button>
                <RingLoader color={"#8C2200"} loading={loading} size={150} />
            </div>
        </div>
    );
}

export default Login;