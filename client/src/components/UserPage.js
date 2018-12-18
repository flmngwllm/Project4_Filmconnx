import React, { Component } from 'react';
import axios from 'axios'
import { Card, CardBody, Input } from 'reactstrap';
import './UserPage.css';

class UserPage extends Component {

    state = {
        poster: {},
        jobs: []

    }

    componentDidMount() {
        // this.getJobs()
        this.getPoster()
    }
    //make an api call to get a specific user
    ///api/poster/${id}
    getPoster = () => {
        const id = this.props.match.params.userId
        axios.get(`/api/poster/${id}/`).then(res => {
            console.log(res.data)
            this.setState({ 
                poster: res.data,
                jobs: res.data.jobs })

        })
    }

    jobdelete = () => {
        axios.delete()
        }

  

    createJobs = () => {
        
        const payload = {
        location: 'Location',
        company: 'company',
        Compensation: 'compensation',
        weather: 'weather',
        date: 'date',
        poster: 'poster'
        }
        axios.post(`/api/jobs/`, payload).then (res => {
            const newJobs = res.data
            const newStateJobs = [...this.state.jobs, newJobs]
            this.setState({jobs:newStateJobs})
        })
            
    }

    render() {
        return (
            <div>


             <button onClick= {this.createJobs}> POST JOB
               </button>

            {this.state.jobs.map(job => (
                <div key = {job.id}>

              
                <div className = 'jobcard' >
                <Card>

                    <CardBody>

                         <Input type="text" name="location" value ={job.location} />
                        <Input type="text" name="company" value ={job.company} />
                        <Input type="text" name="compenstaion" value ={job.compensation} />
                        <Input type="time" name="time" value ={job.time} />
                        <Input type="date" name="date" value ={job.date} />
                        <Input type="text" name="poster" value ={job.poster} />

                        <button >delete</button>
                     </CardBody>


                </Card>
                </div>
                </div>
                ))}

                



            </div>
        );
    }
}

export default UserPage;