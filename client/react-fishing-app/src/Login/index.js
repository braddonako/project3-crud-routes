import React, { Component } from 'react';
import { Form, Button, Message, Segment, Grid, Header } from 'semantic-ui-react';



class Login extends Component {
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
  // Submission of login form
  handleSubmit = async (e) => {
    e.preventDefault();
    const loginUrl = `${process.env.REACT_APP_API_URL}/api/v1/user/login`; // localhost:8000/api/v1/user/register
    const loginResponse = await fetch(loginUrl, {
      method: 'POST',
      body: JSON.stringify(this.state),
      credentials: 'include', // Send a session cookie along with our request
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    const parsedResponse = await  loginResponse.json();
    localStorage.setItem('sessionId', parsedResponse.data.id);
    
    if (parsedResponse.status.code === 200) {
      console.log(parsedResponse)
      console.log('login successful');
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
      Log-in to Foam is the Home!
      </Header>
      <Form size='large' onSubmit={this.handleSubmit}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' type="email" name="email" onChange={this.handleChange} required  />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password' type="password" name="password" onChange={this.handleChange} required
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
          { this.state.errorMsg ? <Message negative>{this.state.errorMsg}</Message> : null }
        </Segment>
      </Form>
      <Message>
        New to us? <a href='/'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
     
    )
  }
}
export default Login;