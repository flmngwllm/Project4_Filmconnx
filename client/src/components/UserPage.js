import React, { Component } from 'react';
import axios from 'axios'
import { Card} from 'reactstrap';

class UserPage extends Component {

    state = {
        poster: {},
        jobs :{}

    }

    componentDidMount() {
        this.getPoster()
    }
 //make an api call to get a specific user
 ///api/poster/${id}
    getPoster = () => {
        const id = this.props.match.params.userId
        axios.get(`/api/poster/${id}/`).then(res => {
            console.log(res.data)
            this.setState({ poster:res.data, jobs:res.data.jobs })
            console.log(this.state.jobs)
        })
    }
//make a call to display jobs 
// api/poster/jobs
    getJobs = () => { 
        const id = this.params.match.params.userId
        axios.get(`/api/poster/${id}/jobs`).then(res => {
            console.log(res.data)
            this.setState({poster:res.data,jobs:res.data})
        })
    }

    


    render() {
        return (
            <div>
                {this.state.poster.name}
                <h1>User Name</h1>

                  {this.state.jobs.company}


                
                </div>
        );
    }
}

export default UserPage;