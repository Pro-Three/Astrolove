import React from 'react';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const styles = {
    button: {
        width: '150px',
        height: '35px',
        color: 'white',
        marginTop: '10px',
        marginBottom: '10px',
        padding: "auto"
    }
}

const Logout = () => {
    return (
        <div className="container">
<<<<<<< HEAD
            <div className="row grey lighten-3 center">

            <h3>Are you sure....?  🥺🥺🥺</h3>

            <button style= {styles.button} className="logoutBtn waves-effect waves-light btn deep-purple lighten-1 btn-medium" id="logoutBtn">Logout</button>

=======
            <div className="row #b0bec5 blue-grey lighten-3 center">
            <h3>Are you sure....?  🥺🥺🥺</h3>
            <button
                className="logoutBtn"
                id="logoutBtn"
                href="/"
                onClick={() => Auth.logout()}
            >
                Logout
            </button>
>>>>>>> bef36aa3cb050750a4aeb985052964a58bde41b0
            </div>
        </div>
    )
}

export default Logout