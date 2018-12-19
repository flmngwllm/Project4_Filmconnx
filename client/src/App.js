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
<<<<<<< HEAD
             < exact path="/" component={LandingPage}/>
             <Route exact path ="/loginpage" component={LoginPage}></Route> 
             <Route exact path ="/applicants" component ={ApplicantPage}></Route>
             <Route exact path ="/signup" component = {SignUp}></Route>
             <Route exact path ="/user" component = {UserPage}></Route>
=======
             <Route exact path="/" component={LoginPage}/>
             
             <Route exact path ="/applicant/:appId" component ={ApplicantPage}/>
             
             <Route exact path ="/signup" component = {SignUp}/>
             <Route exact path ="/poster/:id" component = {UserPage}/>
             
             
             
>>>>>>> a2f2623c1694f53de39abf6d2d1d2959d66aba6a
             

          </Switch>
          <Footer/>
          
      </div>
    </Router>
    );
  }
}

export default App;
