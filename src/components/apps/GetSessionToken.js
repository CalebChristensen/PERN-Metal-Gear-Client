import React, { Component } from 'react';

export default class getSessionToken extends Component {
    constructor () {
      super()
      this.state= {
        data: ''
      }
  
      this.getSessionToken = this.getSessionToken.bind(this)
    }
  
    getSessionToken () {
      let data = localStorage.getItem('SessionToken');
      console.log(data);
      let p = document.createElement("p")
      p.innerHTML = data
      let token = document.getElementById("token")
      token.appendChild(p);
    
      return data;
    }
    render(){ 
        return(
            <div className='button_container'>
            Get Session token
            <br /> <br/>
                <button className='button' onClick={this.getSessionToken}>
                    Click Me
                </button>
                <div id="token"></div>
            </div>
        );
    }
}