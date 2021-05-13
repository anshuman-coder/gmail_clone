import React, { useEffect, useState } from 'react';
import SendMail from './SendMail';
import './App.css';
import Header from "./Header";
import Mail from './Mail';
import EmailList from './EmailList';
import SideBar from './SideBar';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000)
  }, [])

  useEffect( () => {
    auth.onAuthStateChanged( user => {
        if (user) {
          dispatch( login( {
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          } ) )
        }
    } )
  }, [] )

  return (    
    <Router>
      {
        !user ? (
          <React.Fragment>
            <Login />
          </React.Fragment>
        ) : (
            
            <div className="App">   
            <React.Fragment>
                <Header />   
              <div className="app__body">
          
                  <SideBar />

                  <Switch>
                    <Route path="/mail">
                      <Mail />
                    </Route>
                    <Route path="/">
                      <EmailList />
                    </Route>
                  </Switch>
              </div>
              </React.Fragment>
            {sendMessageIsOpen && <SendMail />}
            </div>
    )}
    </Router>
  );
}

export default App;
