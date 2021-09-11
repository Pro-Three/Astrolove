import React, { useState } from 'react';
import 'materialize-css';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import userProfilePic from '../img/generic-background.jpeg'

// Temporary Hashing for list items to avoid package installation (at the moment)
// SOURCE METHOD:  https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
// Single line, ES6 version implemented (below) credited to StackOverflow user 'deekshith'
// StackOverflow link:  https://stackoverflow.com/a/34842797/16407707
const hashCode = s => s.split('').reduce((a,b) => (((a << 5) - a) + b.charCodeAt(0))|0, 0) 


const UserCard = ({ allUsers }) => {
    const [likesCollection, setLikes] = useState([]);

    const handleUpdateLikes = async (event) => {
        event.preventDefault();
        console.log('UserCard - data.user.id:  ', localStorage.getItem('id'))
        console.log('UserCard - event.target.name:  ', event.target.name)
        // setLikes(likeBucket => [...likeBucket, event.target.value])

        if (!localStorage.getItem('id')) {
            return;
        }
        const newLike = [...likesCollection, event.target.name];
        console.log('UseCard - newLike:  ', newLike);
        setLikes(newLike);
        console.log('LIKE STATE:  ', likesCollection)

    
    } 

    if (!allUsers) {
        return (
            <h3>NO USERS YET</h3>
        );
    }
    console.log('userCards COMPONENT - allUsers:  ', allUsers);

    return (
        <div className="row">
            <div className="col s12 m7">
            {allUsers && allUsers.map((allUsers) => (
                <div className="card" id={allUsers._id} key={allUsers._id} >
                    <div className="card mb-3">
                        <div className="card-image">
                            <img src={userProfilePic} alt="holder for user profile"></img>
                        </div>
                        <h4 className="card-header bg-primary text-light p-2 m-0">
                            {allUsers.username} <br />
                        </h4>
                        <div className="card-content card-body bg-light p-2">
                            <ul>
                                <li key={hashCode(allUsers.signSun)}>Sun Sign:    {allUsers.signSun}{console.log('KEY HASH:  ', hashCode(allUsers.signSun))}</li>
                                <li key={hashCode(allUsers.gender)}>Gender:    {allUsers.gender}</li>
                                <li key={hashCode(allUsers.desiredRelationshipPref)}>Relationship Preference:    {allUsers.desiredRelationshipPref}</li>
                                <li key={hashCode(allUsers.aboutMe)}>About Me:    {allUsers.aboutMe}</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="card-action">
                        {/*TO DO:  make 'Like" button work correctly */}
                        <a href="#" name={allUsers._id} onClick={handleUpdateLikes}>Like</a>
                        {/* <a href="#">Like</a> */}
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default UserCard;