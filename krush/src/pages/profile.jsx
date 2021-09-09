import React from 'react';
import { useUserContext } from '../utils/UserContext';

const Profile = () => {
    const [{ currentUser }, {setCurrentUser}] = useUserContext();
    console.log('CURRENT USER (state):  ', currentUser);
    

    return (
        <div className="container">
            <div className="row #b0bec5 blue-grey lighten-3">
            <button>EDIT</button>
            <h3 className="center">Your information here.</h3>
            <p>email:  {currentUser.email}</p>

            

            </div>
        </div>
    )
}

export default Profile