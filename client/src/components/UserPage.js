import React, { Component } from 'react';
import axios from 'axios'


class UserPage extends Component {

    state = {
        poster:{}
        
    }

    componentDidMount() {
        const posterId = this.props.match.params.id;
        this.fetchPoster(posterId)
        console.log(posterId)
    }

    fetchPoster = async (posterId) => {
        try {
            const posterResponse = await axios.get(`/api/poster/${posterId}`)
            await this.setState({
               poster: posterResponse.data
               
            })
        }
        catch (error) {
            console.log(error)
            await this.setState({error: error.message})
        }
    }

       
            



    render() {
        return (
            <div>
               
               <h1>{this.state.poster.name}</h1>
            </div>
        );
    }
}

export default UserPage;