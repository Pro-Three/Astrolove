import React from 'react';
import 'materialize-css';

const UserCard = ({ allUsers, title }) => {
    if (!allUsers) {
        return (
            <h3>NO USERS YET</h3>
        );
    }

    return (
        <div className="row">
            <div className="col s12 m7">
            {allUsers && allUsers.map((allUsers) => (
                <div className="card">
                    <div key={allUsers._id} className="card mb-3">
                        <div className="card-image">
                            <img src="../img/generic-background.jpg"></img>
                            <h3 className="card-title">{title}</h3>
                        
                            <h4 className="card-header bg-primary text-light p-2 m-0">
                                {allUsers.username} <br />
                            </h4>
                            <div className="card-content card-body bg-light p-2">
                                <ul>
                                    <li>{allUsers.signSun}</li>
                                    <li>{allUsers.lastName}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <a href="#">Like</a>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default UserCard;