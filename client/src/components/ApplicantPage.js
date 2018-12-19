import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
  
import './ApplicantPage.css';
import axios from 'axios'


class ApplicantPage extends Component {

    state = {
        poster: {},
        jobs: [],
        user:{}

    }

    componentDidMount() {}
    getUser = () => {
        const id = this.props.match.params.id
        axios.get(`/api/user/${id}/`).then(res => {
            console.log(res.data)
            this.setState({ 
                user: res.data.user})

        })
    }



    





    render() {
        return (
            <div>

            
                <Card>
                    <CardBody>
                        <CardTitle>{this.state.users.map((user) =>(

                            <div> 
                                <img src={user.photo} alt=""/>

                            </div>


                            ))}
                        </CardTitle>

                     <CardTitle>{this.state.users.map((user) =>(

                            <div> 

                                <h3>Profile Name</h3>
                                {user.name}

                            </div>
                    

                     ))}
                     </CardTitle>

                       <CardTitle>{this.state.users.map((user) =>(

                            <div> 

                                <h3>Projects</h3>
                                {user.projects}

                            </div>


                            ))}
                        </CardTitle>

                              <CardTitle>{this.state.users.map((user) =>(

                                <div> 

                                    <h3>Zip Code</h3>
                                    {user.zipcode}

                                </div>


                                ))}
                         </CardTitle>

                         <CardTitle>{this.state.users.map((user) =>(

                                        <div> 

                                            <h3>Email</h3>
                                            {user.email}

                                        </div>


                                        ))}
                        </CardTitle>

                          <CardTitle>{this.state.users.map((user) =>(

                                <div> 

                                    <h3>Bio</h3>
                                    {user.bio}

                                </div>


                                ))}
                          </CardTitle>


                     </CardBody>

                </Card>


          

            </div>
        );
    }
}

export default ApplicantPage;