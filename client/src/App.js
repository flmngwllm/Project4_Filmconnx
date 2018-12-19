import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Nav from './components/Nav';
import LoginPage from './components/LoginPage';
import ApplicantPage from './components/ApplicantPage';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import UserPage from './components/UserPage';
<<<<<<< HEAD
import JobApplicants from './components/JobApplicants';
=======
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import Footer from './components/Footer';

library.add(faIgloo)
>>>>>>> 2172c85b6f86ceed713da13bd71144bd0b3e96d4


class App extends Component {



  render() {
    return (
      <Router> 
      <div>
        <Nav/>
          <Switch>

             {/* <Route exact path="/login" component={Login}></Route> */}
             <Route exact path="/" component={LandingPage}/>
             <Route exact path ="/loginpage" component={LoginPage}/>
             <Route exact path ="/applicants" component ={ApplicantPage}/>
             <Route exact path ="/signup" component = {SignUp}/>
             <Route exact path ="/poster/:id" component = {UserPage}/>
             
             
             
             

          </Switch>
          <Footer/>
          
      </div>
    </Router>
    );
  }
}

export default App;
