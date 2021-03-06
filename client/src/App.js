import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Nav from './components/Nav';
import LoginPage from './components/LoginPage';
import ApplicantPage from './components/ApplicantPage';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import UserPage from './components/UserPage';
// import { library } from '@fortawesome/fontawesome-svg-core'
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'

// library.add(faIgloo)
import JobApplicants from './components/JobApplicants'
import Footer from './components/Footer';


class App extends Component {



  render() {
    return (
      <Router> 
      <div className = "BG" >
        <Nav/>
          <Switch>

             {/* <Route exact path="/login" component={Login}></Route> */}
             <Route exact path="/" component={LoginPage}/>
             <Route exact path ="/applicants/:appId" component ={ApplicantPage}/>
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
