import React, { Component } from 'react';
import axios from 'axios'
import { Button, FormGroup, FormControl, ControlLabel} from "reactstrap";

class HomePage extends Component {

    state = {

        jobs: []
    }

    componentDidMount() {

        axios.get('/api/jobs')
             .then((res) => {

                this.setState({
                    jobs: res.data
                })
                console.log(res.data)
             })
    }

    render() {
        return (
  
            <div>

                <h1>Jobs</h1>

                <h1>{this.state.jobs.title}</h1>

            </div>
        );
    }
}

export default HomePage;