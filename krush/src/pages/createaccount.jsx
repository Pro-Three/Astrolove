import React from 'react';
import Select from "materialize-css";


// function componentDidMount() {
//     // Auto initialize all the things!
//   Select.AutoInit()
// }

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = Select.FormSelect.init(elems);
});

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
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix select-dropdown">radio_button_unchecked</i>
              <select>
                <option value="0"></option>
                <option defaultValue="99">Unspecified</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Bigender</option>
                <option value="4">Agender</option>
                <option value="5">Androgyne</option>
                <option value="6">Genderqueer</option>
                <option value="7">Third</option>
                <option value="8">Fourth</option>
                <option value="9">Fluid</option>
                <option value="14">Questioning</option>
                <option value="15">Other</option>
              </select>
              <label for="gender">Gender</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix select-dropdown">brightness_medium</i>
              {/*<input type="text" id="sun_sign" class="validate" />*/}
              <select>
                <option defaultValue="0"></option>
                <option value="1">Aquarius</option>
                <option value="2">Pisces</option>
                <option value="3">Aries</option>
                <option value="4">Taurus</option>
                <option value="5">Gemini</option>
                <option value="6">Cancer</option>
                <option value="7">Leo</option>
                <option value="8">Virgo</option>
                <option value="9">Libra</option>
                <option value="10">Scorpio</option>
                <option value="11">Sagittarius</option>
                <option value="12">Capricorn</option>
              </select>
              <label for="signSun">Sun Sign</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix select-dropdown">brightness_medium</i>
              {/*<input type="text" id="sun_sign" class="validate" />*/}
              <select>
                <option defaultValue="0"></option>
                <option value="1">Just friends</option>
                <option value="2">Open to dating</option>
                <option value="3">Friends with benefits</option>
                <option value="4">Not interested in a relationship</option>
              </select>
              <label for="desiredRelationshipPreference">Desired Relationship Preference</label>
            </div>
          </div>
          <div class="row center-align">
            <button class="waves-effect waves-light btn deep-purple lighten-1 btn-medium" type="submit" name="action">Submit
              <i class="material-icons right">assignment_ind</i>
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