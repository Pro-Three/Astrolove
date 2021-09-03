import React from 'react';

const Login = () => {
    return (
        // <div className="container">
        //     <div className="row #b0bec5 blue-grey lighten-3">

        //     <h3 className="center">Welcome Back to Astrolove</h3>
        //     <h4 className="center">The newest and hottest dating site!</h4>
        //     <br/>
        //     <h5 className="center">Please see the login form to continue your soulmatch journey!</h5>

        //     <div className="col zzz"  id="logForm">
        //         <form>
        //         <label id="logUserLabel">Username</label><br/>
        //         <input type="text" id="logUserName"/><br/>
        //         <label id="logPasswordLabel">Password</label><br/>
        //         <input type="text" id="logPassword"/><br/>
        //         </form>
        //     </div>

        //     <div className="logButtzDiv col s12 m12 l12 center" id="logBtnDiv">
        //     <button className="loginBtn" id="loginBtn">Login</button>
        //     </div>
            


        //     </div>
        // </div>

<div class="row">
  <div class="col s12 l4 offset-l4">
    <div class="card grey lighten-3">
      <div class="card-content">
        <h4 class="card-title center-align">Login</h4>
        <form>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">email</i>
              <input type="email" id="email" class="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">vpn_key</i>
              <input type="password" id="password" class="validate" />
              <label for="email">Password</label>
            </div>
          </div>
          <div class="row center-align">
            <button class="waves-effect waves-light btn deep-purple lighten-1 btn-medium" type="submit" name="action">Login
              <i class="material-icons right">verified_user</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    )
}

export default Login