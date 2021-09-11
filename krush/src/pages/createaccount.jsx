import React,{ useState } from 'react';
import Select from "materialize-css";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  // var instances = Select.FormSelect.init(elems);
});


const CreateAccount = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        signSun: formState.signSun,
        gender: formState.gender,
        desiredRelationshipPref: formState.relationshipPref,
        aboutMe: formState.aboutMe
      },
    });
    const email = formState.email;
    const sunsign = formState.signSun;
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    localStorage.setItem('email', email)
    localStorage.setItem('sunsign', sunsign)
    localStorage.getItem(sunsign)
  };
  const handleChange = (event) => {
    console.log(formState.signSun)
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const styles = {
    profiles: {
        marginBottom: '200px'
    }}


    return (
<div class="row">
  <div style= {styles.profiles} class="col s12 l4 offset-l4">
    <div class="card grey lighten-3">
      <div class="card-content">
        <h4 class="card-title center-align">Create Account</h4>
        <form onSubmit={handleFormSubmit}>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">accessibility</i>
              <input
                name="firstName"
                type="text" 
                id="firstName"
                className="validate"
                onChange={handleChange}
              />
              <label for="firstName">First Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">people</i>
              <input
                name="lastName"
                type="text"
                id="lastName"
                class="validate"
                onChange={handleChange} />
              <label for="lastName">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">email</i>
              <input
                name="email"
                type="email"
                id="email"
                className="validate"
                onChange={handleChange}
              />
              <label for="email" data-error="wrong" data-success="right">Email</label>
              {/* <span className="helper-text" data-error="wrong" data-success="right">Helper text</span> */}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">public</i>
              <input
                name="username"
                type="text"
                id="username"
                className="validate"
                onChange={handleChange}
              />
              <label for="username">Display Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                name="password"
                type="password"
                id="password"
                className="validate"
                onChange={handleChange}
              />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix select-dropdown">radio_button_unchecked</i>
              <select
                name="gender"
                id="gender"
                onChange={handleChange}
              >
                <option value="0"></option>
                <option defaultValue="Unspecified">Unspecified</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Bigender">Bigender</option>
                <option value="Agender">Agender</option>
                <option value="Androgyne">Androgyne</option>
                <option value="Genderqueer">Genderqueer</option>
                <option value="Third">Third</option>
                <option value="Fourth">Fourth</option>
                <option value="Intersex">Intersex</option>
                <option value="Fluid">Fluid</option>
                <option value="Questioning">Questioning</option>
                <option value="Other">Other</option>
              </select>
              <label for="gender">Gender</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix select-dropdown">brightness_medium</i>
              <select
                name="signSun"
                id="signSun"
                onChange={handleChange}
              >
                <option defaultValue="0"></option>
                <option value="Aquarius">Aquarius</option>
                <option value="Pisces">Pisces</option>
                <option value="Aries">Aries</option>
                <option value="Taurus">Taurus</option>
                <option value="Gemini">Gemini</option>
                <option value="Cancer">Cancer</option>
                <option value="Leo">Leo</option>
                <option value="Virgo">Virgo</option>
                <option value="Libra">Libra</option>
                <option value="Scorpio">Scorpio</option>
                <option value="Sagittarius">Sagittarius</option>
                <option value="Capricorn">Capricorn</option>
              </select>
              <label for="signSun">Sun Sign</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix select-dropdown">brightness_medium</i>
              {/*<input type="text" id="sun_sign" class="validate" />*/}
              <select
                name="relationshipPref"
                id="relationshipPref"
                onChange={handleChange}
              >
                <option defaultValue="null"></option>
                <option>Just friends</option>
                <option>Open to dating</option>
                <option>Friends with benefits</option>
                <option>Not interested in a relationship</option>
              </select>
              <label for="desiredRelationshipPreference">Desired Relationship Preference</label>
            </div>
          </div>
          <div className="row">
            <form>
              <div className="input-field col s12">
                <i className="material-icons prefix">description</i>
                <textarea
                  name="aboutMe"
                  id="aboutMe"
                  className="materialize-textarea"
                  data-length="240"
                  onChange={handleChange}
                >
                </textarea>
                <label for="aboutMe">About Me</label>
              </div>
            </form>
          </div>
          <div className="row center-align">
            <button className="waves-effect waves-light btn deep-purple lighten-1 btn-medium" type="submit" name="action">Submit
              <i className="material-icons right">assignment_ind</i>
            </button>
          </div>
          <Link to="/login">← Go to Login</Link>
        </form>
      </div>
    </div>
  </div>
</div>
    )
};

export default CreateAccount;