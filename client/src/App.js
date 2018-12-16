import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Nav from './components/Nav';
import LoginPage from './components/LoginPage';
import ApplicantPage from './components/ApplicantPage';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import UserPage from './components/UserPage';


class App extends Component {



  render() {
    return (
      <Router> 
      <div>
        <Nav/>
          <Switch>

             {/* <Route exact path="/login" component={Login}></Route> */}
             <Route exact path="/" component={LandingPage}></Route>
             <Route exact path ="/loginpage" component={LoginPage}></Route> 
             <Route exact path ="/applicants" component ={ApplicantPage}></Route>
             <Route exact path ="/signup" component = {SignUp}></Route>
             <Route exact path ="/user" component = {UserPage}></Route>
             

          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
