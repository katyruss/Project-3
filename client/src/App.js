import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import Logo from './Assets/Images/Logo.png';
import Footer from './Footer/Footer';
import Search from './Search/Search';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
    this.setState(localStorage.setItem('searchZip', ''))
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
    this.setState(localStorage.removeItem('searchZip'))
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid className="bnb-nav">
          <Navbar.Header>
            <img className="Logo" src={Logo} alt="Logo" />
            <span className="btnLoc">
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'signup')}
              >
                Sign up
            </Button>
              {
                !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
              }
              {
                isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
              }
            </span>
          </Navbar.Header>
        </Navbar>
        <Footer />
        <Search />
      </div >
    );
  }
}

export default App;
