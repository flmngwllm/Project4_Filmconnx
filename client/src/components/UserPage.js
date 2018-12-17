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

    handleCreateNewJob = () => {
        const id = this.props.match.params.userId
        const payload = {
          location: 'location',
          company: 'company',
          description: 'description',
          time: 'time',
          user: []
        }
        axios.post(`/api/user/${id}/jobs`, payload).then(res => {
          const newJobs = res.data
          const newStateJobs = [...this.state.jobs, newJobs]
          this.setState({ trips: newStateJobs })
        })
      }

      handleDelete = (jobId) => {
        console.log(jobId)
        const id = this.props.match.params.userId
        axios.delete(`/api/user/${id}/jobs/${jobId}`).then(() => {
        const newJobs = [...this.state.jobs]
        const filterJob = newJobs.filter(job =>{
          return job.id !== jobId
        })
    
        this.setState({jobs: filterJob})
        })
      }

      handleUpdate = (jobId) => {
        const id = this.props.match.params.userId
        const findJob = this.state.jobs.find(job =>{
          return job.id === jobId
        })
        axios.patch(`/api/user/${id}/trip/${jobId}`, findJob).then(() => {
          console.log("Updated Job")
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