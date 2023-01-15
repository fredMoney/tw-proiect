import React, { Component } from "react";
import * as actions from "../actions/actions";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.logIn = this.logIn.bind(this);

        this.state = {
            id: null,
            email: "",
            password: "",

            submitted: false
        };
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    logIn() {
        let data = {
            email: this.state.email,
            password: this.state.password
        };

        actions.authenticateUser(data)
            .then(response => {
                this.setState({})
            })
    }

    render() {
        return (
            <div className="LoginForm">
                <form onSubmit={this.handleSubmitEvents}>
                    <label>Email</label>
                    <input type="text" value={this.state.email} onChange={this.onChangeEmail} />
                    <label>Password</label>
                    <input type="password" value={this.state.password} onChange={this.onChangePassword} />
                    <input type="submit" value="Log In" />
                </form>
            </div>
        );
    }
}