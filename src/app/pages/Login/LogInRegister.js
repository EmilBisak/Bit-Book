import React, { Component } from 'react';
import M from 'materialize-css';

import Login from './Login'
import { Register } from './Register'
import { postRegister, postLogin } from '../../../services/authService'
import { Loading } from '../../partials/Loading';

export class LoginRegister extends Component {
    constructor(props) {
        super(props)
        this.activeTab = React.createRef();
        this.loginTab = React.createRef();
        this.tabs = null;
        this.state = {
            succsessMsg: "",
            isLoading: false
        }
    }

    sendRegisterData = (data) => {
        return postRegister(data)
    }


    componentDidMount() {
        this.tabs = M.Tabs.init(this.activeTab.current);
    }

    onSuccessfulRegistration = () => {
        this.tabs.select('test-swipe-1');
        this.setState({ succsessMsg: "Your registration was successfull!" })
    }

    isLoadingHandler = () => {
        this.setState({ isLoading: true })
    }

    loginSuccess = () => {
        this.setState({ isLoading: false })
    }


    render() {


        return this.state.isLoading
            ?
            <Loading />
            :
            <div className="container" id='login'>
                <div className='row'>
                    <div className='col s12 m6' id='login-text'>
                        <h3>BitBook Login</h3>
                        <p>
                            BitBook is social network that provides easy sharing of your photos,videos and thoughts.
                        </p>
                    </div>
                    <div className='col s12 m6 ' id='login-form'>
                        <p className='green-text'>{this.state.succsessMsg}</p>
                        <ul id="tabs-swipe-demo" className="tabs" ref={this.activeTab}>
                            <li className="tab col s6 "><a className="active teal-text" href="#test-swipe-1" ref={this.loginTab} id='login-tab'>Login</a></li>
                            <li className="tab col s6 "><a href="#test-swipe-2" className='teal-text ' id='register'>Register</a></li>
                        </ul>
                        <div id="test-swipe-1" className="col s12 ">
                            <Login
                                sendLoginData={postLogin}
                                isLoadingHandler={this.isLoadingHandler}
                                loginSuccess={this.loginSuccess}
                                isLoading={this.state.isLoading} />
                        </div>
                        <div id="test-swipe-2" className="col s12 ">
                            <Register sendRegisterData={postRegister} loginTab={this.loginTab} activeTab={this.activeTab} onRegister={this.onSuccessfulRegistration} />
                        </div>
                    </div>
                </div>
            </div>
    }
}