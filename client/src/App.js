import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import HomePage from './components/HomePage';


class App extends Component {



  render() {
    return (
      <Router> 
      <div>
          <Switch>

             {/* <Route exact path="/login" component={Login}></Route> */}
             <Route exact path="/postings" component={HomePage}></Route>

          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
