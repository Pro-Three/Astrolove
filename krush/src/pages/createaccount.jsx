import React from 'react';

const CreateAccount = () => {
    return (
        <div className="container">
            <div className="row #b0bec5 blue-grey lighten-3">

            <h3 className="col s12 m12 l12 center">Hello New Being of Light!!!</h3>

            <h5 className="col s12 m12 l12 center">Please fill out the following form to create an account!</h5>

            <div className="col s12 m12 l12"  id="newForm">
                <form>
                <label id="newFirstLabel">First Name:</label><br/>
                <input type="text" id="newFirstName"/><br/>
                <label id="newLastLabel">Last Name:</label><br/>
                <input type="text" id="newLastName"/><br/>
                <label id="newLastLabel">Email:</label><br/>
                <input type="text" id="newEmail"/><br/>
                <label id="newUserLabel">Username:</label><br/>
                <input type="text" id="newUserName"/><br/>
                <label id="newPasswordLabel">Password:</label><br/>
                <input type="text" id="newPassword"/><br/>
                <label id="newSunSign">Sun Sign:</label><br/>
                <input type="text" id="newSunSign"/><br/>
                </form>
            </div>

            </div>
        </div>
    )
}

export default CreateAccount