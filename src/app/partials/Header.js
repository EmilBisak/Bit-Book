import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { logOut }  from '../../services/authService';
import M from 'materialize-css';


class Header extends Component {
    constructor(){
        super();
        this.hamburgerBtn = React.createRef();
    }
    
    componentDidMount() {
        M.Sidenav.init(this.hamburgerBtn.current);
    }

    onLogout = (event) => {
        event.preventDefault()
        logOut();
        this.props.history.push("/")
    } 


    render() {
        return (
            <div>
                <nav >
                    <div className="nav-wrapper #00acc1 cyan darken-1">
                        <div className="container">
                            <a href="/BitBook" className="brand-logo">BitBook<i className="material-icons">group</i></a>
                            <a href="/BitBook" data-target="mobile-demo" className="sidenav-trigger right"  ><i className="material-icons">list</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li className="sidenav-close"><Link to="/">Feed</Link></li>
                                <li className="sidenav-close"><Link to='/people'>People</Link></li>
                                <li className="sidenav-close"><Link to="/profile">Profile</Link></li>
                                <li className="sidenav-close"><a href='' onClick={this.onLogout}><i className="material-icons" >power_settings_new</i></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo" ref={this.hamburgerBtn}>
                    <li className="sidenav-close"><Link to="/">Feed</Link></li>
                    <li className="sidenav-close"><Link to='/people'>People</Link></li>
                    <li className="sidenav-close"><Link to="/profile">Profile</Link></li>
                    <li className="sidenav-close"><a href='' onClick={this.onLogout}><i className="material-icons" >power_settings_new</i>Logout</a></li>
                </ul>
            </div>
        )
    }
}
export default withRouter(Header)