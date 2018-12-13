import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import JobPost from './components/JobPost';


class App extends Component {



  render() {
    return (
      <Router> 
      <div>
       <Navbar />
          <Switch>

             {/* <Route exact path="/login" component={Login}></Route> */}
             <Route exact path="/postings" component={JobPost}></Route>

          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
