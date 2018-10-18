import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Auth from './components/Auth/Auth'
import Header from './components/site/Header'
import Splash from './components/site/Splash'
import {AuthContext} from './components/Auth/AuthContext'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.setToken = (token) => {
      localStorage.setItem('token', token);
      this.setState({ sessionToken: token });
    }
    this.state = {
      sessionToken: '',
      setToken: this.setToken
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }
  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }

  logout = () => {
    this.setState({
      sessionToken: '',
    });
    localStorage.clear();
  }

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
          <Route path='/' exact>
            <Splash />
          </Route>
        </Switch>
      )
    } else {
      return(
        <Route path='/Auth'>
          <Auth />
        </Route>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <AuthContext.Provider value={this.state}>
            <div>
              <Header clickLogout={this.logout}/>
              {this.protectedViews()}
            </div>
          </AuthContext.Provider>
        </Router>
      </div>
    );
  }
}

export default App;
