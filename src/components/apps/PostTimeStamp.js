import React, { Component } from 'react';
import axios from 'axios'

let content ={ testdata: { item: 'This was saved!'}};
let testDataAfterFetch = document.getElementById('test-data');
let createdAtAfterFetch = document.getElementById('created-at');


export default class GetApp extends Component {
    constructor (props) {
      super(props)
      this.state= {
        time: ''
        
      }
  
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick () {
      axios.post('http://localhost:3000/test/seven', {
        body: JSON.stringify(content)
      })
      .then(response => response.json())
          .then(function (text) {
            console.log(text);
            testDataAfterFetch.innerHTML = text.data.tesdata;
            createdAtAfterFetch.innerHTML = text.testdata.createdAt;
          })
          return this.handleClick;
         
    }
    render(){ 
        return(
            <div className='button_container'>
                <button className='button' onClick={this.handleClick}>
                    Click Me
                </button> 
                <p>{this.state.time}</p>
            </div>
        );
    }
}