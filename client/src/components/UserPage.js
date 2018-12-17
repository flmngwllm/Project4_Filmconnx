import React, { Component } from 'react';
import axios from 'axios'

class UserPage extends Component {

    state = {
        poster: {}

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
            this.setState({ poster: res.data })
        })
    }
//make a call to display jobs 
// api/poster/jobs
    getJobs = () => { 
        const id = this.params.match.params.userId
        axios.get(`/api/`)
        

    }


    render() {
        return (
            <div>

                <h1> {this.state.poster.name}</h1>
                {this.state.poster.email}
                <h1>User Name</h1>
            </div>
        );
    }
}

export default UserPage;