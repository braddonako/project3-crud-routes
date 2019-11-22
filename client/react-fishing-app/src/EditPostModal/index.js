import React from 'react'
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';

const EditPostModal = (props) => {
  console.log(props)
  return (
    <Modal open={props.open}>
      <Header>Edit Post</Header>
      <Modal.Content>
        <Form onSubmit={props.closeAndEdit}>
           <Label>
           Image of Fish:
          </Label>
          <Form.Input type='text' name='img' value={props.postToEdit.img} onChange={props.handleEditChange}/>
          <Label>
            Type of Fish:
          </Label>
          <Form.Input type='text' name='nameOfFish' value={props.postToEdit.nameOfFish} onChange={props.handleEditChange}/>
          <Label>
            Description:
          </Label>
          <Form.Input type='text' name='description' value={props.postToEdit.description} onChange={props.handleEditChange}/>
          <Label>
            Gear used:
          </Label>
          <Form.Input type='text' name='gear' value={props.postToEdit.gear} onChange={props.handleEditChange}/>
          <Modal.Actions>
            <Button color='green' type='submit'>Edit Entry</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
    )
}

export default EditPostModal;