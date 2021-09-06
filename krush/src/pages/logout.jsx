import React from 'react';

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
            <div className="row grey lighten-3 center">

            <h3>Are you sure....?  🥺🥺🥺</h3>

            <button style= {styles.button} className="logoutBtn waves-effect waves-light btn deep-purple lighten-1 btn-medium" id="logoutBtn">Logout</button>

            </div>
        </div>
    )
}

export default Logout