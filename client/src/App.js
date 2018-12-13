import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';


class App extends Component {



  render() {
    return (
      <Router> 
      <div>
        <Navbar/>
          <Switch>

             {/* <Route exact path="/login" component={Login}></Route> */}
             <Route exact path="/" component={HomePage}></Route>

          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
