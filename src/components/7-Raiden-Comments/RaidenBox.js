import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import RaidenCreate from './RaidenCreate';
import RaidenEdit from './RaidenEdit';
import RaidenTable from './RaidenTable'
import {AuthContext} from '../Auth/AuthContext';
import APIURL from '../../helpers/environment';

class RaidenBox extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      "authcomment": {
        "item": ""
      },
      updatePressed: false,
      commentToUpdate: {}
    }
  }

  componentWillMount() {
    this.fetchComments()
  }

  fetchComments = () => {
    fetch(`${APIURL}/raiden/getall`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.auth.sessionToken
      })
    })
    .then((res) => res.json())
    .then((logData) => {
      return this.setState ({ authcomment: logData })
    })
  }

  commentDelete = (event) => {
      fetch(`${APIURL}/raiden/delete/${event.target.id}`,{
        method: 'DELETE',
        body: JSON.stringify({ test: {id: event.target.id} }),
        headers: new Headers({
          'Content-Type': "application/json",
          'Authorization': this.props.auth.sessionToken
        }),
      })

    .then(response => {
      console.log(response);
      this.fetchComments()
    })
  }

  commentUpdate = (event, authcomment) => {
      let authCommentDataInput = document.getElementById("updateValue").value;
      let authInputData = { authcomment: { item: authCommentDataInput } };
    fetch(`${APIURL}/raiden/update/${authcomment.id}`, {
      method: 'PUT',
      body: JSON.stringify(authInputData),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.auth.sessionToken
      })
    })
    .then((res) => {
      console.log(res);
      this.setState({ updatePressed: false })
      this.fetchComments();
    })
  }

  setUpdatedComment = (event, authcomment) => {
    this.setState({
      commentToUpdate: authcomment,
      updatePressed: true
    })
  }

  render(){
    const authcomment = this.state.authcomment.length >= 1 ?
    <RaidenTable authcomment={this.state.authcomment} delete={this.commentDelete} update={this.setUpdatedComment} /> :
    <div></div>
    return (
      <div className="App">
      <Container>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <RaidenCreate token={this.props.token} updateCommentsArray={this.fetchComments}/>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            {authcomment}
          </Col>
        </Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          {
            this.state.updatePressed ? <RaidenEdit t={this.state.updatePressed} update={this.commentUpdate} item={this.state.commentToUpdate} />
            : <div></div>
          }
        </Col>
      </Container>
      </div>
    )
  }
}

export default props => (
  <AuthContext.Consumer>
    {auth => <RaidenBox {...props} auth={auth} />}
  </AuthContext.Consumer>
);