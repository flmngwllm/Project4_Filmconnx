import React from 'react';
import { Button, Form, FormGroup, Label, Input,Jumbotron, Container } from 'reactstrap';
import './LoginPage.css';
<<<<<<< HEAD
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
=======

>>>>>>> 666a1ba69c2001476961617a446a7ff943e34fd9


export default class Example extends React.Component {

  
  render() {
    return (
      <div>
      <div >
      <Jumbotron  fluid>
        <Container  className = "Jumbo"  fluid>
          <h1 className="display-3">FilmCONNX</h1>
          <p className="lead">Finding you the professionals you need.</p>
        </Container>
      </Jumbotron>

      </div>

      <div className = "login">




      <Form >
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="your@idk.cool" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="i seen't it" />
        </FormGroup>
        <Button>Submit</Button>
        
        
      </Form>
      </div>
      </div>
    );
  }
}