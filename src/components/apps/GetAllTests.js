import React, { Component } from 'react';
import axios from 'axios'

export default class GetApp extends Component {
    constructor (props) {
      super(props)
  
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick () {
      axios.get('http://localhost:3000/test/one')
      .then(response => {
          console.log(response);
          response.data.map((element) => { 
            let li = document.createElement("li")
            li.innerHTML = element.testdata
            let demo = document.getElementById("demo")
            demo.appendChild(li);
            return this.handleClick
          })
        })
    }
    render(){ 
        return(
            <div className='button_container'>
            Get ALL
            <br /><br />
                <button className='button' onClick={this.handleClick}>
                    Click Me
                </button> 
                <div id="demo"></div>
            </div>
        );
    }
}