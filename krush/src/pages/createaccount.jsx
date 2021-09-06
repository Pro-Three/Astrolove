import React from 'react';

const CreateAccount = () => {
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

<div className="row">
  <div className="col s12 l4 offset-l4">
    <div className="card grey lighten-3">
      <div className="card-content">
        <h4 className="card-title center-align">Create Account</h4>
        <form>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">accessibility</i>
              <input type="text" id="first_name" className="validate" />
              <label for="first_name">First Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">people</i>
              <input type="text" id="last_name" className="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input type="email" id="email" className="validate" />
              <label for="email" data-error="wrong" data-success="right">Email</label>
              {/* <span className="helper-text" data-error="wrong" data-success="right">Helper text</span> */}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">public</i>
              <input type="text" id="user_name" className="validate" />
              <label for="user_name">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input type="password" id="password" className="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">brightness_medium</i>
              <input type="text" id="sun_sign" className="validate" />
              <label for="sun_sign">Sun Sign</label>
            </div>
          </div>
          <div className="row center-align">
            <button className="waves-effect waves-light btn deep-purple lighten-1 btn-medium" type="submit" name="action">Submit
              <i className="material-icons right">assignment_ind</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    )
}

export default CreateAccount