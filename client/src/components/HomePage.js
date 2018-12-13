import React, { Component } from 'react';
import axios from 'axios'

class HomePage extends Component {

    state = {

        jobs = []
    }

    componentDidMount() {

        axios.get('/api').then(

            console.log(res.data)
        )
    }


    render() {
        return (
            <div>
                hello world
            </div>
        );
    }
}

export default HomePage;