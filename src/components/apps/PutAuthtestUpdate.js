import React, { Component } from 'react';

export default class PutAuthtestUpdate extends Component {
    constructor () {
      super()
      this.state= {
        "authtestdata": {
          "item": ""
        },

      }
    }

    handleSubmit = (e) => {
      e.preventDefault();
      let authTestDataInput = document.getElementById("updateValue").value;
      let authInputData = { authtestdata: { item: authTestDataInput } };
      let postIdNumber = document.getElementById("updateNumber").value;
      const accessToken = localStorage.getItem('SessionToken');
      fetch(`http://localhost:3000/authtest/update/${postIdNumber}`,{
        method: 'PUT',
        headers: {
          'Content-Type': "application/json",
          'Authorization': accessToken
        },
        body: JSON.stringify(authInputData)
      })

    .then(response => {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let myItem = document.getElementById('newItemValue');
      myItem.innerHTML = data.authtestdata;
    })
  }
    render(){ 
        return(
            <div className='button_container'>
              <form onSubmit={this.handleSubmit}>
              <label>Post a Auth Test:</label>
              <br />
              <input type="text" id="updateNumber" placeholder="Post ID #"  />
              <br /><br />
              <input type="text" id="updateValue" placeholder="New Data"  />
                <br /><br />
                <button className='button' type="submit">
                    Click Me
                </button>
                <div id="newItemValue"></div>
              </form>
            </div>
        );
    }
}