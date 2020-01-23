import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Loading } from '../../partials/Loading';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginName: "",
            loginPassword: "",
            errorMsg: "",
            isLoading: false
        }
    }

    loginHandler = (event) => {
        event.preventDefault();
        const { loginName, loginPassword } = this.state;
        const content = {
            username: loginName,
            password: loginPassword
        }

        this.sendLoginForm(content)
    }

    resetLoginForm = () => {
        this.setState({
            loginName: "",
            loginPassword: "",
            errorMsg: ""
        })
    }

    goToHomepage = () => this.props.history.push("/");

    sendLoginForm = (data) => {
        this.setState({ isLoading: true })
        this.props.sendLoginData(data)
            .then(({ error }) => {
                if (error) {
                    return this.setState({ errorMsg: error.message, isLoading: false })
                }

                this.setState({ isLoading: false })
                this.props.loadingOn();
                this.resetLoginForm();
                this.goToHomepage();
            })
    }

    onChangeHandler = (event) => {
        const elementId = event.target.id;
        const elementValue = event.target.value;
        this.setState({
            [elementId]: elementValue
        })
    }

    render() {

        return this.state.isLoading
            ?
            <Loading />
            :
            (
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="loginName" type="text" className="validate" autoComplete="ussername" required onChange={this.onChangeHandler} />
                                <label htmlFor="loginName">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="loginPassword" type="password" className="validate" autoComplete="current-password" required onChange={this.onChangeHandler} />
                                <label htmlFor="loginPassword">Pass</label>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" onClick={this.loginHandler} name="action">Login
                    <i className="material-icons right">vpn_key</i>
                        </button>
                        <p className="red-text">{this.state.errorMsg} </p>
                    </form>
                </div>
            )

    }

}

export default withRouter(Login)