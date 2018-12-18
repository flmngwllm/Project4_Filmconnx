import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './LoginPage.css';


export default class Example extends React.Component {

  
  render() {
    return (
      <div className = 'login' >
      <Form inline>
        <FormGroup>
          <Label for="exampleEmail" hidden>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form></div>
    );
  }
}