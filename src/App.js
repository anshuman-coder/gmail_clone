import React from 'react';
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
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <Router>
      <div className="App">
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
        
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
