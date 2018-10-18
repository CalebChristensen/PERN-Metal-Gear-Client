import React, { Component } from 'react';
import axios from 'axios'

export default class GetAuthItem extends Component {
    constructor (props) {
      super(props)
  
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick (e) {
      e.preventDefault();
      const accessToken = localStorage.getItem('SessionToken');
      axios.get('http://localhost:3000/authtest/getall', {
        headers: {
          'Authorization': accessToken
        }
      })
      .then(response => {
          console.log(response);
          response.data.map((element) => { 
            let li = document.createElement("li")
            li.innerHTML = element.authtestdata
            let authDemo = document.getElementById("authDemo")
            authDemo.appendChild(li);
            return this.handleClick
          })
        })
    }
    render(){ 
        return(
            <div className='button_container'>
            Get All auth 
            <br /> <br />
                <button className='button' onClick={this.handleClick}>
                    Click Me
                </button> 
                <div id="authDemo"></div>
            </div>
        );
    }
}