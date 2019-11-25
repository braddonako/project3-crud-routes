import React, { Component } from 'react';
import { Form, Button, Message, Grid, Header, Segment } from 'semantic-ui-react';

class Register extends Component {
    constructor() {
      super();
      this.state = {
        email: '',
        password: '',
        nickname: ''
      }
    }
    // Handling of form value change
    handleChange = (e) => {
      e.preventDefault();
      this.setState({
        [e.currentTarget.name]: e.currentTarget.value
      })
    }
    // Submission of register in form
    handleSubmit = async (e) => {
      e.preventDefault();
      console.log(process.env.REACT_APP_API_URL)
      const registrationUrl = `${process.env.REACT_APP_API_URL}/api/v1/user/register`; // localhost:8000/api/v1/user/register
      const registerResponse = await fetch(registrationUrl, {
        method: 'POST',
        body: JSON.stringify(this.state),
        credentials: 'include', // Send a session cookie along with our request
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const parsedResponse = await registerResponse.json();
      localStorage.setItem('sessionId', parsedResponse.data.id);
      if (parsedResponse.status.code === 201) {
        console.log('Sign up successful');
        this.props.history.push('/posts'); // Change url to /dogs programmatically with react-router
      } else {
        // Else display error message to the user
        this.setState({
          errorMsg: parsedResponse.status.message
        });
      }
    }
    render() {
      return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
      Register here!
      </Header>
      <Form size='large' onSubmit={this.handleSubmit}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' type="email" name="email" onChange={this.handleChange} required />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name="password" onChange={this.handleChange} required 
          />
          <Form.Input type='name' name="nickname" placeholder='River Name AKA NickName' onChange={this.handleChange} required />
          <Button color='teal' fluid size='large'>
            Register
          </Button>
           { this.state.errorMsg ? <Message negative>{this.state.errorMsg}</Message> : null }
        </Segment>
      </Form>
      <Message>
        Already registered? <a href='/login'>Log-in</a>
      </Message>
    </Grid.Column>
  </Grid>
      )
    }
  }
  export default Register;