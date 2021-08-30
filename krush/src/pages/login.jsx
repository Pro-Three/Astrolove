import React from 'react';

const Login = () => {
    return (
        <div className="container">
            <div className="row #b0bec5 blue-grey lighten-3">

            <h3 className="center">Welcome Back!</h3>

            <h5 className="center">Please see the login form to continue your soulmatch journey!</h5>

            <div className="col s12 m12 l12"  id="logForm">
                <form>
                <label id="logUserLabel">Username</label><br/>
                <input type="text" id="logUserName"/><br/>
                <label id="logPasswordLabel">Password</label><br/>
                <input type="text" id="logPassword"/><br/>
                </form>
            </div>

            <div className="logButtzDiv col s12 m12 l12 center" id="logButtsDiv">
            <button className="loginBtn" id="loginBtn">Login</button>
            </div>
            

            </div>
        </div>
    )
}

export default Login