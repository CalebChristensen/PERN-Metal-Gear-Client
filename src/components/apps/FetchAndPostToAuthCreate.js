import React, { Component } from 'react';

export default class GetApp extends Component {
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
      const accessToken = localStorage.getItem('SessionToken');
      let authInputData = { authtestdata: { item: this.state.authtestdata.item }}
      // axios.post('http://localhost:3000/authtest/create', authInputData,{
      //   'Authorization': accessToken
      // })
      fetch('http://localhost:3000/authtest/create',{
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
          'Authorization': accessToken
        },
        body: JSON.stringify(authInputData)
      })

    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data)
    })
  }
    render(){ 
        return(
            <div className='button_container'>
              <form onSubmit={this.handleSubmit}>
              <label>Post a Auth Test:</label>
              <br />
              <input type="text" placeholder="Submit a test" onChange={this.handleTest} />
                <br /><br />
                <button className='button' type="submit">
                    Click Me
                </button>
              </form>
            </div>
        );
    }
}