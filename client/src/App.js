import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Nav from './components/Nav';
import LoginPage from './components/LoginPage';
import ApplicantPage from './components/ApplicantPage';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import UserPage from './components/UserPage';
<<<<<<< HEAD
// import { library } from '@fortawesome/fontawesome-svg-core'
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'

// library.add(faIgloo)
=======
import JobApplicants from './components/JobApplicants'
import Footer from './components/Footer';
>>>>>>> 666a1ba69c2001476961617a446a7ff943e34fd9


class App extends Component {



  render() {
    return (
      <Router> 
      <div>
        <Nav/>
          <Switch>

             {/* <Route exact path="/login" component={Login}></Route> */}
<<<<<<< HEAD
             <Route exact path="/" component={LandingPage}/>
             <Route exact path ="/loginpage" component={LoginPage}/>
             <Route exact path ="/applicant/:appId" component ={ApplicantPage}/>
=======
             <Route exact path="/" component={LoginPage}/>
             <Route exact path ="/applicants" component ={ApplicantPage}/>
>>>>>>> 666a1ba69c2001476961617a446a7ff943e34fd9
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
