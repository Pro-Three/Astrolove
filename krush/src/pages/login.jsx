import React from 'react';

const Login = () => {
    return (
        <div className="container">
            <div className="row">

            <h3 className="center">Welcome Back!</h3>

            <h5 className="center">Please see the login form to continue your soulmatch journey!</h5>

            <div className="col s12 m12 l12"  id="logForm">
                <form>
                <label id="logUserLabel">Username</label><br/>
                <input type="text" id="logUserName"/><br/>
                <label id="logPasswordLabel">Password</label><br/>
                <input type="text" id="logPassword"/><br/>
                </form>
                <button className="button" id="loginButtz">Login</button>
            </div>


            </div>
        </div>
    )
}

export default Login