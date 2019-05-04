import React, { Component } from 'react';
import '../Signup/Signup.css';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(`The values are ${this.state.name}, ${this.state.email}, and ${this.state.password}`)
        this.setState({
            name: '',
            email: '',
            password: ''
        })
    }


    render() {
        return (
            <div className="signup">
                <form className="form-signup" onSubmit={this.onSubmit}>
                    <h4 className="form-signup-heading">Please sign up here</h4>
                    <input
                        type="text"
                        // value={this.state.name}
                        className="form-control"
                        placeholder="Name"
                        required autoFocus
                    /><br></br>

                    <input
                        type="email"
                        // value={this.state.email}
                        className="form-control"
                        placeholder="Email address"
                        required autoFocus
                    /><br></br>

                    <input
                        type="password"
                        // value={this.state.password}
                        className="form-control"
                        placeholder="Password" required
                    /><br></br>

                    <button className="btn btn-lg btn-primary submit-button" value="Submit User" type="button">Sign up</button>
                </form>
                {/* <div>
              <Link to="/">{'Signin'}</Link>
            </div> */}
            </div>

        )
    }
}
export default Signup;  