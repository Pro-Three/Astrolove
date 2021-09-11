import React from 'react';
import Auth from "../utils/auth";
// import { Link } from "react-router-dom";

const styles = {
    button: {
        width: '150px',
        height: '35px',
        color: 'white',
        marginTop: '10px',
        marginBottom: '10px',
        marginRight: '5px',
        padding: "auto"
    },

    contains: {
        padding: '20px'
    }
}

const Logout = () => {
    return (
        <div className="container">
            <div className="row grey lighten-3 center">
            <h3 style={styles.contains}>Are you sure....?  🥺🥺🥺</h3>
            <button
                className="logoutBtn waves-effect waves-light btn deep-purple lighten-1 btn-medium"
                id="logoutBtn"
                href="/"
                onClick={() => Auth.logout()}
                style= {styles.button}
            >
                Logout
            </button>
            <button
                className="stayInBtn waves-effect waves-light btn deep-purple lighten-1 btn-medium"
                id="stayInBtn"
                href="/"
                style= {styles.button}
            >
                Stay Here
            </button>
            </div>
        </div>
    )
}

export default Logout