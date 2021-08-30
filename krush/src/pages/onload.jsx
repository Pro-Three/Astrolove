import React from 'react';
// import $ from 'jquery';


const OnLoad = () => {

    const buttonClicked = () => { 
        console.log('Button was clicked!');
    };
    
    return (
        <div className="container">
            <div className="row">
            <h3 className="center">Welcome Starchild</h3>

            <button type="button" className="login" id="login" onClick={buttonClicked}>Login</button>
            <button type="button" className="newAccount" id="newAccount">Sign Up</button>

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