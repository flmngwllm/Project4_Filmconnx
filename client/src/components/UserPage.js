import React, { Component } from 'react';
import axios from 'axios'

class UserPage extends Component {

    state = {
        poster:{},
        jobs: {},
        user:{}

    }

    componentDidMount() {

        axios.get('/api/jobs')
             .then((res) => {

                this.setState({
                    jobs: res.data
                })
                console.log(res.data)
             })
    }




    render() {
        return (
            <div>
                hello girls
            </div>
        );
    }
}

export default UserPage;