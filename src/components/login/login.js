import React, { Component } from 'react';
import '../login/login.scss';
import logo from '../../assets/images/white_logo.png'
export class Login extends Component {
    render() {
        return (
            <div className="main_block1">
                <div className="login_wraper">
                    <div className="login__container">
                        <div className="login__logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="login__signin">
                            <h3 className="login__title">Sign In To Admin</h3>

                            <form>
                                <div className="input-group">
                                    <input type="text" placeholder="Enter email" />
                                </div>
                                <div className="input-group">
                                    <input type="password" className="pass" placeholder="Enter password" />
                                </div>
                                <div className="login__extra">
                                    <div className="col align-right">
                                        <p >Forgot Password ?</p>
                                    </div>
                                </div>
                                <div className="login__actions">
                                    <button type="button">Sign In</button>
                                </div>
                            </form>
                            <div className="sign_up_switch">
                                <div className="login__account-msg">
                                    <span> Don't have an account yet ? </span>&nbsp;&nbsp;
                                    <p >Sign Up</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;