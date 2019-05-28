import React, { Component } from 'react';
import '../Signup/Signup.css';
import API from '../Utils/API'

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`The values are ${this.state.name}, ${this.state.email}, and ${this.state.password}`)

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        API.newUser(user).then(res => {
            console.log(res)
            //     this.props.history.push(`/signup`)
        })
    }


    render() {
        return (
            <div className="signup">
                <form method='POST' className="form-signup" onSubmit={this.onSubmit}>
                    <h4 className="form-signup-heading">Please sign up here</h4>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.onChange}
                        required autoFocus
                    /><br></br>

                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email address"
                        value={this.state.email}
                        onChange={this.onChange}
                        required autoFocus
                    /><br></br>

                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password" required
                        value={this.state.password}
                        onChange={this.onChange}
                    /><br></br>

                    <button className="btn btn-lg btn-primary submit-button" value="Submit User" type="button" onClick={(e) => this.handleSubmit(e)}>Sign up</button>

                </form>
            </div>
        )
    }
}
export default Signup;  