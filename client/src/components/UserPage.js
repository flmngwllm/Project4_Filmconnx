import React, { Component } from 'react';
import axios from 'axios'
import { Card, CardBody, Input, Button,CardTitle,CardSubtitle,} from 'reactstrap';
import './UserPage.css';

class UserPage extends Component {

    state = {
        poster: {},
        jobs: [],
        user:{}

    }

    componentDidMount() {
        // this.getJobs()
        this.getPoster()
    }
    //make an api call to get a specific user
    ///api/poster/${id}
    getPoster = () => {
        const id = this.props.match.params.id
        axios.get(`/api/poster/${id}/`).then(res => {
            console.log(res.data)
            this.setState({ 
                poster: res.data,
                jobs: res.data.jobs })

        })
    }



    jobDelete = (jobId) => {
        console.log(jobId)
        const id = jobId
        axios.delete(`/api/jobs/${id}`).then(()=>{
            this.getPoster()
        })
      }

      jobUpdate = (payload) => {
        axios.patch(`/api/jobs/${payload.id}/`,payload ).then(() => {

          console.log("Updated Job")
        })
      }
      handleChange = (event, jobId) => {
        const { value, name } = event.target
        const newJobs =[...this.state.jobs]
        const mapJob = newJobs.map(job =>{
          if (job.id === jobId){
          job[name] = value 
          }
          return job
        })
        this.setState({ jobs:mapJob })
      }       


  

      createJobs = () => {
          const poster = this.state.poster.id
        const payload = {
            location: 'location',
            company: 'company',
            compensation: 'compensation',
            description: "description",
            date: 'date',
            poster: poster
    
        }
        axios.post(`/api/jobs/`, payload).then(res => {
          const newJobs = res.data
          const newStateJobs = [...this.state.jobs, newJobs]
          this.setState({ jobs: newStateJobs })
        })
      }



      

    render() {
        return (
            <div>

             <div className = "PostJob">
             <Button outline color= "sucess" onClick= {this.createJobs}> Create Job </Button>
               </div>

            {this.state.jobs.map(job => (
                <div key = {job.id}>

              
                <div className = 'jobcard' >
              
              
                <Card>

                    <CardBody>
                    <CardTitle>{this.state.poster.name}</CardTitle>
                    <CardSubtitle>{this.state.poster.email}</CardSubtitle>
                    </CardBody>
                    
                     <CardBody>
                        <Input onBlur={ () => this.jobUpdate(job)} type="text" onChange={(event) => this.handleChange(event, job.id)} name="location" value ={job.location} />
                        <Input onBlur={ () => this.jobUpdate(job)} type="text" onChange={(event) => this.handleChange(event, job.id)} type="text" name="company" value ={job.company} />
                        <Input onBlur={ () => this.jobUpdate(job)} type="text" onChange={(event) => this.handleChange(event, job.id)} type="text" name="compenstaion" value ={job.compensation} />
                        <Input onBlur={ () => this.jobUpdate(job)} type="text" onChange={(event) => this.handleChange(event, job.id)}  type="datetime-local" name="time" value ={job.time} />                      
                        <Input onBlur={ () => this.jobUpdate(job)} type="text" onChange={(event) => this.handleChange(event, job.id)} type="text" name="description" value ={job.description} />

                        <Button outline color= "danger" onClick={() => this.jobDelete(job.id)} >delete</Button>
                     
                     
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