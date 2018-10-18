import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {AuthContext} from '../Auth/AuthContext'
import APIURL from '../../helpers/environment';



class PostSignInUser extends Component {
  constructor(props) {
    super(props);
    this.state= {
        username: '',
        password: ''
      };
    }
    handleUsername = (e) => {this.setState({ username: e.target.value })};
    handlePassword = (e) => {this.setState({ password: e.target.value})};

    handleSubmit = (e) => {
      let userData = {user: {username: this.state.username, password: this.state.password}}
      fetch(`${APIURL}/patriots/user/signin`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(
        (response) => response.json()
      ).then((data) => {
        this.props.auth.setToken(data.sessionToken)
      })
        e.preventDefault()
      }
    render(){ 
        return(
          <div className='button_container'>
          <h1 > Welcome Back Boss!</h1>
            <br /> <br />
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label className='welcomeBox'>Username:</Label>
                <Input type="text" name="this.state.username" placeholder="Username" onChange={this.handleUsername} />
              </FormGroup>
              <FormGroup>
                <Label className='welcomeBox'>Password:</Label>
                <Input type="password" name="this.state.passwordhash" placeholder="Password" onChange={this.handlePassword} />
              </FormGroup>
                  <Button className='button' type="submit">
                      Login
                  </Button>
                  <br /> <br/>
                  <Button onClick= {this.props.toggleForm}>Switch to Sign Up</Button>
              </Form> 
            </div>
        );
    }
}

export default props => (
  <AuthContext.Consumer>
    {auth => <PostSignInUser {...props} auth={auth} />}
  </AuthContext.Consumer>
);