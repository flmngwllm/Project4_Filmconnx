import React, { Component } from 'react';
import axios from 'axios'

class UserPage extends Component {

    state = {
        poster:{}
        
                }

    componentDidMount() {
        this.getPoster()
    }

    getPoster = () => {
        const id = this.props.match.params.id
        axios.get(`/api/poster/${id}`).then(res =>{
            this.setState({poster: res.data})
            console.log(res.data)
        })
             

    }



    render() {
        return (
            <div>

               <h1> {this.state.poster.name}</h1>
               <h1>User Name</h1>
            </div>
        );
    }
}

export default UserPage;