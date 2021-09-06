import React from 'react';
import { Link } from 'react-router-dom';

// import $ from 'jquery';


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


const OnLoad = () => {

    const newUse = () => { 
        console.log('loginClicked!');
    };

    const exUse = () => { 
        console.log('newClicked!');
    };
    
    return (
        <div className="container">
            <div className="row grey lighten-3">
            <h3 className="center">Welcome Starchild</h3>

            <div className="col s12 m12 l12 center">
            <Link to="/createaccount">
            <button type="button" style= {styles.button} className="newUse waves-effect waves-light btn deep-purple lighten-1 btn-medium" id="newUse" onClick={newUse}>New User</button>
            </Link>
            </div>

            <div className="col s12 m12 l12 center">
            <Link to="/login">
            <button type="button" style= {styles.button} className="exUse waves-effect waves-light btn deep-purple lighten-1 btn-medium" id="exUse" onClick={exUse}>Existing User</button>
            </Link>
            </div>
            
            

            </div>
        </div>
    )
}

export default OnLoad

// $("#login").onclick(function() {
//     alert("The paragraph was clicked.");
//   });

// var Login = document.getElementById("login");

// Login.onclick(function() {
//     console.log("here");
// });



// class Detail extends React.Component {


//     render() {
//         return (<div>
//             <p>Hello, {chance.first()}.</p>
//             <p>You're from {chance.country({ full: true })}.</p>
//             <button>Meet Someone New</button>
//         </div>);
//     }
// }

// export default Detail;