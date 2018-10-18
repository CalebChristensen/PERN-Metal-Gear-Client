import React, { Component } from 'react';
import axios from 'axios'

export default class GetApp extends Component {
    constructor () {
      super()
      this.state= {
        test: ''
      }
  
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick () {
      axios.get('http://localhost:3000/test/helloclient')
      .then(response => {
          console.log(response);
          this.setState({ test: response.data})})
    }
    render(){ 
        return(
            <div className='button_container'>
                <button className='button' onClick={this.handleClick}>
                    Click Me
                </button>
                <p>{this.state.test}</p>
            </div>
        );
    }
}