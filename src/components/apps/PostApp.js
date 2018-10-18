import React, { Component } from 'react';
import axios from 'axios'

export default class GetApp extends Component {
    constructor () {
      super()
      this.state= {
        post: ''
      }
  
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick () {
      axios.post('http://localhost:3000/test/two')
      .then(response => {
          console.log(response);
          this.setState({ post: response.data})})
    }
    render(){ 
        return(
            <div className='button_container'>
                <button className='button' onClick={this.handleClick}>
                    Click Me
                </button>
                <p>{this.state.post}</p>
            </div>
        );
    }
}