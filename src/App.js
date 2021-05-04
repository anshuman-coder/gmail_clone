import React from 'react';
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

function App() {
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
      </div>
    </Router>
  );
}

export default App;
