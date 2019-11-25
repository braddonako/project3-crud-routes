import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreatePostForm extends Component {
  constructor(){
    super();

    this.state = {
      nameOfFish: '',
      description: '',
      img: '',
      gear: ''
    }
  }
  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  render(){
    return (
      <Segment style={{
      background: 'LightSlateGray'
     }}>
        <h4>Create Entry</h4>
        
        <Form onSubmit={(e) => this.props.addPost(e, this.state)} >
          <Label style={{padding: '15px', margin: '15px'}}>Image of Fish:</Label>
          <Form.Input type='text' name='img' value={this.state.img} onChange={this.handleChange}/>
          <Label style={{padding: '15px', margin: '15px'}}>Type of Fish:</Label>
          <Form.Input type='text' name='nameOfFish' value={this.state.nameOfFish} onChange={this.handleChange}/>
          <Label style={{padding: '15px', margin: '15px'}}>Description:</Label>
          <Form.Input as='textarea' name='description' value={this.state.description} onChange={this.handleChange}/>
          <Label style={{padding: '15px', margin: '15px'}}>Gear:</Label>
          <Form.Input type='text' name='gear' value={this.state.gear} onChange={this.handleChange}/>
          <Button type='Submit'>Create Entry</Button>
        </Form>
      </Segment>
      )
  }
}

export default CreatePostForm;