import React from 'react';
import PostCreateUser from '../apps/PostCreateUser'
import PostSignInUser from '../apps/PostSignInUser'
import { Container, Row, Col } from 'reactstrap';

class Auth extends React.Component  {
  constructor(props) {
   super(props)
   this.state = {
     isUser: false,

   }
 }

  changeUserStatus = () => this.setState({ isUser: !this.state.isUser});
  
  componentDidMount =() => {
    this.setState({ isUser: false }); 
  }
  authViewShow = (props) => {
    if (this.state.isUser) {
      return(
        <PostSignInUser setToken={this.setSessionState} toggleForm= { this.changeUserStatus }/>
      )
    }else{
      return(
        <PostCreateUser setToken={this.setSessionState} toggleForm={ this.changeUserStatus }/>
       )
     }
   }
   render(){
  return (
    <div className="authJumbo">
    <Container className="auth-container">
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
        {this.authViewShow()}
        </Col>
      </Row>
    </Container>
    </div>
  )
}
}
export default Auth;