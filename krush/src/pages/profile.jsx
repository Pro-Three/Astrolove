import React from 'react';
import { useUserContext } from '../utils/UserContext';

const Profile = () => {
    const [{ currentUser }, { setCurrentUser }] = useUserContext();
    console.log('CURRENT USER (state) (profile):  ', currentUser);
    

    return (
        <div className="container">
            <div>
            {/*<h3 className="center">Profile</h3>*/}
            <div className="row">
                <div className="col s12 m5">
                    <div className="card-panel card large card-content">
                    <h4 class="card-title center-align">Profile</h4>
                        <ul>
                            <li>USERNAME:  </li><span className="username" name="username"></span>
                            <li>EMAIL:  </li><span className="email" name="email"></span>
                            <li>DISPLAY NAME:  </li><span className="username" name="username"></span>
                            <li>NAME:  </li><span className="firstName" name="firstName"></span><span className="lastName" name="lastName"></span>
                            <li>SUN SIGN:  </li><span className="signSun" name="signSun"></span>
                            <li>GENDER:  </li><span className="gender" name="gender"></span>
                            <li>DESIRED RELATIONSHIP PREFERENCE:  </li><span className="desiredRelationshipPref" name="desiredRelationshipPref"></span>
                            <li>ABOUT ME:  </li><span className="aboutMe" name="aboutMe"></span>
                        </ul>
                    </div>
                </div>
             </div>
            {/*<p>email:  {currentUser.email}</p>*/}

            

            </div>
        </div>
    )
}

export default Profile