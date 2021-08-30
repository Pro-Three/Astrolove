import React from 'react';
// import $ from 'jquery';


const OnLoad = () => {

    const newUse = () => { 
        console.log('loginClicked!');
    };

    const exUse = () => { 
        console.log('newClicked!');
    };
    
    return (
        <div className="container">
            <div className="row">
            <h3 className="center">Welcome Starchild</h3>

            <div className="col s12 m12 l12 center">
            <button type="button" className="newUse" id="newUse" onClick={newUse}>New User</button>
            </div>

            <div className="col s12 m12 l12 center">
            <button type="button" className="exUse" id="exUse" onClick={exUse}>Existing User</button>
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