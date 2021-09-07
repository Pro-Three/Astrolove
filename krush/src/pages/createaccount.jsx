import React from 'react';

const CreateAccount = () => {
    const Data = () => {
        
        localStorage.setItem("sun-sign", 'sun_sign.value')
    }
    return (
        // <div className="container">
        //     <div className="row #b0bec5 blue-grey lighten-3">

        //     <h3 className="col s12 m12 l12 center">Hello New Being of Light!!!</h3>

        //     <h5 className="col s12 m12 l12 center">Please fill out the following form to create an account!</h5>

        //     <div className="col s12 m12 l12"  id="newForm">
        //         <form>
        //         <label id="newFirstLabel">First Name:</label><br/>
        //         <input type="text" id="newFirstName"/><br/>
        //         <label id="newLastLabel">Last Name:</label><br/>
        //         <input type="text" id="newLastName"/><br/>
        //         <label id="newLastLabel">Email:</label><br/>
        //         <input type="text" id="newEmail"/><br/>
        //         <label id="newUserLabel">Username:</label><br/>
        //         <input type="text" id="newUserName"/><br/>
        //         <label id="newPasswordLabel">Password:</label><br/>
        //         <input type="text" id="newPassword"/><br/>
        //         <label id="newSunSign">Sun Sign:</label><br/>
        //         <input type="text" id="newSunSign"/><br/>
        //         </form>
        //     </div>
        //     <div className="center">
        //     <button className="createAccount" id="createAccount">Begin Journey</button>
        //     </div>
        //     </div>
        // </div>

<div class="row">
  <div class="col s12 l4 offset-l4">
    <div class="card grey lighten-3">
      <div class="card-content">
        <h4 class="card-title center-align">Create Account</h4>
        <form>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">accessibility</i>
              <input type="text" id="first_name" class="validate" />
              <label for="first_name">First Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">people</i>
              <input type="text" id="last_name" class="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">email</i>
              <input type="email" id="email" class="validate" />
              <label for="email" data-error="wrong" data-success="right">Email</label>
              {/* <span class="helper-text" data-error="wrong" data-success="right">Helper text</span> */}
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">public</i>
              <input type="text" id="user_name" class="validate" />
              <label for="user_name">Username</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">vpn_key</i>
              <input type="password" id="password" class="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">brightness_medium</i>
              <input type="text" id="sun_sign" class="validate" />
              <label for="sun_sign">Sun Sign</label>
            </div>
          </div>
          <div class="row center-align">
            <button class="waves-effect waves-light btn deep-purple lighten-1 btn-medium" type="submit" name="action" onClick={Data}>Submit
              <i class="material-icons right">assignment_ind</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    )
};

export default CreateAccount