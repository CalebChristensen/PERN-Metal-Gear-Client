import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {AuthContext} from '../Auth/AuthContext';

class TheBossEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "authcomment": {
        "item": ""
      },
    };
  }

  componentWillMount() {
    this.setState({
      id: this.props.item.id,
      item: this.props.item.authcomment, 
    })
  }

  handleChange = (e) => {this.setState({ authcomment: {item: e.target.value} })};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.update(e, this.state)
  }

  render() {
    return (
      <div>
        <Modal isOpen={true} >
          <ModalHeader >Edit Your Post</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit} >
              <FormGroup>
                <Label for="comment">Edit Your Comment</Label>
                <Input id="updateValue" type="text" name="comment" 
                placeholder="Type a new message to update your comment." onChange={this.handleChange} />
              </FormGroup>
              <Button type="submit" color="primary">Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default props => (
  <AuthContext.Consumer>
    {auth => <TheBossEdit {...props} auth={auth} />}
  </AuthContext.Consumer>
);