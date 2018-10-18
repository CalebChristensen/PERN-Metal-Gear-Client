import React, { Component } from 'react';

export default class GetSingleAuthItem extends Component {
    constructor () {
      super()
      this.state= {
        "authtestdata": {
          "item": ""
        },

      }
    }
  
    handleTest = (e) => {this.setState({ authtestdata: {item: e.target.value} })};

    handleSubmit = (e) => {
      e.preventDefault();
      let postIdNumber = document.getElementById("getNumber").value;
      const accessToken = localStorage.getItem('SessionToken');
      fetch(`http://localhost:3000/authtest/${postIdNumber}`,{
        method: 'GET',
        headers: {
          'Content-Type': "application/json",
          'Authorization': accessToken
        },
      })

    .then(response => {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      let myItem = document.getElementById('getItemValue');
      myItem.innerHTML = response.authtestdata;
    })
  }
    render(){ 
        return(
            <div className='button_container'>
              <form onSubmit={this.handleSubmit}>
              <label>Grab a single Auth Item:</label>
              <br />
              <input type="text" id="getNumber" placeholder="Enter ID #" onChange={this.handleTest} />
                <br /><br />
                <button className='button' type="submit">
                    Click Me
                </button>
                <div id="getItemValue"></div>
              </form>
            </div>
        );
    }
}