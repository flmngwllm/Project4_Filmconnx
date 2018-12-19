import React, { Component } from 'react';
import { Card,  CardBody,
    CardTitle,} from 'reactstrap';
  
import './ApplicantPage.css';
import axios from 'axios'


class ApplicantPage extends Component {

    state = {
        user:{}

    }

    componentDidMount() {}
    getUser = () => {
        const id = this.props.match.params.id
        axios.get(`/api/user/${id}/`).then(res => {
            console.log(res.data)
            this.setState({ 
                user: res.data})

        })
    }



    





    render() {
        return (
            <div>

            
                <Card>
                    <CardBody>
                        <CardTitle>{this.state.user.name}
                        </CardTitle>

                    

                      

                            

                        


                     </CardBody>

                </Card>


          

            </div>
        );
    }
}

export default ApplicantPage;