import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {AuthContext} from '../Auth/AuthContext'
import APIURL from '../../helpers/environment';

class PostCreateUser extends Component {
  constructor(props) {
    super(props);
    this.state= {
        username: '',
        email: '',
        password: ''
      };
    }
    handleUsername = (e) => {this.setState({ username: e.target.value })};
    handleEmail = (e) => {this.setState({ email: e.target.value })};
    handlePassword = (e) => {this.setState({ password: e.target.value})};

  
    handleSubmit = (e) => {
      let newUser = {user: {username: this.state.username, email: this.state.email, password: this.state.password}}
      fetch(`${APIURL}/patriots/user/createuser`, {
        method: 'POST',
        body: JSON.stringify(newUser),
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

      validateSignUp = (event) => {
        this.setState({
          errorMessage: 'Fields must not be empty'
        })
        event.preventDefault();
      }
    render(){ 
      const submitHandler = !this.state.username ? this.validateSignup : this.handleSubmit
        return(
          <div className='button_container'>
            <h1> FOXHOUND Recruitment</h1>
            <p >Welcome to the Metal Gear Database. <br />
            Please fill out the following information.
            </p>
            <Form onSubmit={submitHandler}>
              <FormGroup>
                <Label className='welcomeBox'>Username:</Label>
                <Input type="text" name="this.state.username" placeholder="Username" onChange={this.handleUsername} />
                {this.state.errorMessage && <span className="error">user name is required</span>}
              </FormGroup>
              <FormGroup>
                <Label className='welcomeBox'>Email:</Label>
                <Input type="email" name="this.state.email" placeholder="Email" onChange={this.handleEmail} />
              </FormGroup>
              <FormGroup>
                <Label className='welcomeBox'>Password:</Label>
                <Input type="password" name="this.state.passwordhash"  placeholder="Password" minLength="5" required onChange={this.handlePassword} />
                </FormGroup>
                  <Button className='button' type="submit" >
                      SUBMIT
                  </Button>
                  <br /> <br/>
                  <Button onClick= {this.props.toggleForm}>Switch to Log In</Button>
              </Form>
            </div>
        );
    }
}
export default props => (
  <AuthContext.Consumer>
    {auth => <PostCreateUser {...props} auth={auth} />}
  </AuthContext.Consumer>
);