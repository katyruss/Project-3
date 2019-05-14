import React, { Component } from 'react';
import { Navbar, Button, NavDropdown } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import Search from './Search/Search';


class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
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
        <Navbar fluid>
          <Navbar.Header>
            <span>
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

              {/* <Link className="nav-links" to="/brews">Brew n Bark</Link> */}

              {/* <Link className="nav-links" to="/barks">Barks</Link> */}
              <Link className="nav-title" to="#">Brews & Barks</Link>
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
