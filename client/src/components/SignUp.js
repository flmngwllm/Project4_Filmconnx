import React from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import axios from 'axios'
import './SignUP.css';

// const Postion = styled.div`
// display: flex;
//   justify-content: center;
//   `

export default class Example extends React.Component {



  state = {
    newPoster: {
      email: '',
      password: '',
      website: '',
      name: '',
      image: '',
      company: ''
    }
  }

  handleChange = (event) => {
    // const { name, value } = event.target
    // this.setState({ [name]: value })
    const createdPoster = { ...this.state.newPoster }
    createdPoster[event.target.name] = event.target.value
    this.setState({ newPoster: createdPoster })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/api/poster/', this.state.newPoster).then(res => {
      this.props.history.push(`/poster/${res.data.id}`)

    })
  }


  render() {
    return (
      <div className='signup' >
        <Form onSubmit={this.handleSubmit}>
          <FormGroup >
            <Label htmlfor="email">Email</Label>
            <Input onChange={this.handleChange} value={this.state.newPoster.email} type="email" name="email" placeholder="email" />
          </FormGroup>
          <FormGroup>
            <Label htmlfor="password">Password</Label>
            <Input onChange={this.handleChange} value={this.state.newPoster.password} type="password" name="password" id="" placeholder="password" />
          </FormGroup>
          <FormGroup>
            <Label htmlfor="name">Name</Label>
            <Input onChange={this.handleChange} value={this.state.newPoster.name} type="name" name="name" placeholder="name" />
          </FormGroup>
          <FormGroup>
            <Label htmlfor="website">Website</Label>
            <Input onChange={this.handleChange} value={this.state.newPoster.website} type="website" name="website" id="" placeholder="website" />
          </FormGroup>
          <FormGroup>
            <Label htmlfor="company">Company</Label>
            <Input onChange={this.handleChange} value={this.state.newPoster.company} type="" name="company" id="" placeholder="company placeholder" />
          </FormGroup>
          <FormGroup>
            <Label htmlfor="image">image</Label>
            <Input onChange={this.handleChange} value={this.state.newPoster.image} type="" name="image" id="" placeholder="image placeholder" />
          </FormGroup>
          <FormGroup>
            {/* <Label htmlfor="File">File</Label>
          <Input type="file" name="file" id="exampleFile" /> */}

            <Button color="danger" type="submit">Submit</Button>
          </FormGroup>


        </Form>

      </div>

    );
  }
}