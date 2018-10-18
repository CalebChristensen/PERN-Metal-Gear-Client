import React, { Component } from 'react';

export default class DeleteAuthItem extends Component {
    constructor () {
      super()
      this.state= {
        "authtestdata": {
          "item": ""
        }
      }
    }

    handleSubmit = (e) => {
      e.preventDefault();
      let postIdNumber = document.getElementById("deleteNumber").value;
      const accessToken = localStorage.getItem('SessionToken');
      fetch(`http://localhost:3000/authtest/delete/${postIdNumber}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': "application/json",
          'Authorization': accessToken
        },
      })

    .then(response => {
      console.log(response);
    })
  }
    render(){ 
        return(
            <div className='button_container'>
              <form onSubmit={this.handleSubmit}>
              <label>Delete an Auth Item:</label>
              <br />
              <input type="text" id="deleteNumber" placeholder="Enter ID #"  />
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