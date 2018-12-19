import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

import { Card,  CardBody,
    CardTitle,} from 'reactstrap';
  
import './ApplicantPage.css';
import axios from 'axios'


class ApplicantPage extends Component {

    state = {
        user:{}

        users: {}
    }

    componentDidMount() {
        const id = this.props.match.params.appId
        axios.get(`/api/users/${id}`)
            .then(res => {
                console.log(res.data)
                this.setState({ users: res.data })
            })
    }
    render() {
        return (
            <div>

                <Card> 

                       
                   <CardBody className="applicant"> 
                        <h2> {this.state.users.name} </h2>
                        <img className="img" src={this.state.users.photo} alt="" srcset=""/>



                        <h3 className="cardDets">Email</h3>
                       <CardText> {this.state.users.email} </CardText>

                        <h3 className="cardDets">Location</h3>
                       <CardText> {this.state.users.location} </CardText>

                        <h3 className="cardDets">Projects</h3>
                       <CardText> {this.state.users.projects} </CardText>

                        <h3 className="cardDets">Zip Code</h3>
                       <CardText> {this.state.users.zipcode} </CardText>

                        <h3 className="cardDets">Bio</h3>
                       <CardText> {this.state.users.bio} </CardText>


                   </CardBody>

                </Card>

            </div>
        );
    }
}

export default ApplicantPage;