import React, { Component } from 'react';
import axios from 'axios'

class JobApplicants extends Component {

    state = {

        jobs: []
    }

    componentDidMount() {

        axios.get('/api/jobs')
            .then(res => {

                console.log(res.data)
                this.setState({ jobs: res.data})
            })
    }


    render() {
        return (
            <div>

            <h1>{this.state.company}</h1>
                
            </div>
        );
    }
}

export default JobApplicants;