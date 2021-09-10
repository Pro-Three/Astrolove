import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { useUserContext } from '../utils/UserContext';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const [{ currentUser }, { setCurrentUser }] = useUserContext();


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('EMAIL:  ', formState.email)
    console.log(`PASSWORD:  `, formState.password)
    // setCurrentUser({
    //   username: 'username',
    //   email: 'email',
    //   signSun: 'signsun',
    //   firstName: 'firstname',
    //   lastName: 'lastname',
    //   gender: 'gender',
    //   desiredRelationshipPref: 'relationship',
    //   aboutMe: 'aboutme'
    // })
    console.log('CURRENT USER (state) (login):  ', currentUser);
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      console.log('mutationResponse.data.login.user:  ', mutationResponse.data.login.user)
      
      if (mutationResponse.data.login.user) {
        console.log('mutationResponse data login user is true')
        // setCurrentUser(mutationResponse.data.login.user)
        // setCurrentUser({
        //   email: formState.email
        // })
        // setCurrentUser({
        //   username: mutationResponse.data.login.user.username,
        //   email: mutationResponse.data.login.user.email,
        //   signSun: mutationResponse.data.login.user.signSun,
        //   firstName: mutationResponse.data.login.user.firstName,
        //   lastName: mutationResponse.data.login.user.lastName,
        //   gender: mutationResponse.data.login.user.gender,
        //   desiredRelationshipPref: mutationResponse.data.login.user.desiredRelationshipPref,
        //   aboutMe: mutationResponse.data.login.user
        // })
      }
      
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
    localStorage.setItem('EMAIL', formState.email);
    localStorage.getItem('EMAIL')
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    setCurrentUser({
      username: 'username_GHOSTDOG',
      email: formState.email,
      signSun: 'signsun',
      firstName: 'firstname',
      lastName: 'lastname',
      gender: 'gender',
      desiredRelationshipPref: 'relationship',
      aboutMe: 'aboutme'
    })
  };

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

    <div className="row">
      <div className="col s12 l4 offset-l4">
        <div className="card grey lighten-3 z-depth-2">
          <div className="card-content">
            <h4 className="card-title center-align">Login</h4>
            <form onSubmit={handleFormSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">{/*email*/}</i>
                  <label for="email">Email</label>
                  <input
                    placeholder="youremail@domain.com"
                    name="email"
                    type="email"
                    id="email"
                    className="validate"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">{/*vpn_key*/}</i>
                  <label for="email">Password</label>
                  <input
                    placeholder="••••••"
                    name="password"
                    type="password"
                    id="password"
                    className="validate"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {error ? (
                <div>
                  <p className="error-text">The credentials entered are incorrect.  Please try again.</p>
                </div>
              ) : null}
              <div className="row center-align">
                <button
                  className="waves-effect waves-light btn deep-purple lighten-1 btn-medium"
                  type="submit"
                  name="action"
                >
                  Login
                <i className="material-icons right">{/*verified_user*/}</i>
                </button>
              </div>
              <Link to="/createaccount">← Create a new account</Link>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Login