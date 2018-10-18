import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BioTable from './BioTable'
import {AuthContext} from '../Auth/AuthContext';
import APIURL from '../../helpers/environment';

class SolidusSnakeStats extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
    }
  }

  componentWillMount() {
    this.fetchCharacters()
  }

  fetchCharacters = () => {
    fetch(`${APIURL}/test/5`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.auth.sessionToken
      })
    })
    .then((res) => res.json())
    .then((logData) => {
      let arrTemp =[]
      logData.length>0?
      logData.map(log =>arrTemp.push(log)):arrTemp.push(logData)
      console.log(logData);
      console.log(arrTemp)
      this.setState({ characters: arrTemp }, ()=>console.log(this.state.characters.length) )
    })
  }


  render(){
    const blue = this.state.characters.length >= 1 ?
    <BioTable characters={this.state.characters} /> :
    <h2>Information</h2>
    return (
      <div className="App">
      <Container>
        <Row>
          <Col>
            {blue} 
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

export default props => (
  <AuthContext.Consumer>
    {auth => <SolidusSnakeStats {...props} auth={auth} />}
  </AuthContext.Consumer>
);