import React, { Component } from 'react';
import '../Home/Home.css'
// import { Bnb } from "../Results/Bnb"

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <h4>
              </h4>
          )
        }
        {
          !isAuthenticated() && (
            <h4>
              {/* You are not logged in! Please{' '} */}
              <a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}></a>
              {/* {' '}to continue. */}
              </h4>
          )
        }
      </div>
    );
  }
}

export default Home;
