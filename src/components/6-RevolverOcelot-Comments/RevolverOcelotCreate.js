import React, { Component } from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import {AuthContext} from '../Auth/AuthContext'
import APIURL from '../../helpers/environment';

class RevolverOcelotCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "authcomment": {
        "item": ""
      },
    };
  }

  handleTest = (e) => {this.setState({ authcomment: {item: e.target.value} })};

  handleSubmit = (event) => {
    event.preventDefault()
    let authInputData = { authcomment: { item: this.state.authcomment.item }}
    fetch(`${APIURL}/revolverocelot/create`, {
      method: 'POST',
      body: JSON.stringify(authInputData),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.auth.sessionToken
      }),
    })
    .then((res) => res.json())
    .then((logData) => {
      this.props.updateCommentsArray();
      this.setState({
        "authcomment": {
          "item": ""
        },
      })
    })
  }
  render() {
    return(
      <div>
        <h3>Comment Section</h3>
        <hr />
        <Form onSubmit={this.handleSubmit} >
          <FormGroup>
            <Label for="authcomment">Enter Your Text Below</Label>
            <textarea className="form-control" rows="5" id="authcomment" type="text" name="authcomment" placeholder="Write your text here..." onChange={this.handleTest} />
          </FormGroup>
          <Button type ='submit' color="primary">Submit</Button>
          <br /><br />
        </Form>
      </div>
    )
  }
}

export default props => (
  <AuthContext.Consumer>
    {auth => <RevolverOcelotCreate {...props} auth={auth} />}
  </AuthContext.Consumer>
);