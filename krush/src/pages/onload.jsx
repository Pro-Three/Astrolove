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


const OnLoad = () => {
    return (
      <div class="carousel carousel-slider" style={{height: "84vh"}}>
    <div class="carousel-fixed-item">
      <div class="container">
        <h1 class="white-text">Welcome Superstar</h1>
        <a class="waves-effect waves-light btn deep-purple lighten-1 btn-medium" href="/login" target="_blank">LOGIN</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a class="waves-effect waves-light btn deep-purple lighten-1 btn-medium" href="/createaccount" target="_blank">CREATE Account</a>
      </div>
    </div>
    <div class="carousel-item cc1 white-text" href="#one!" >
      <div class="container" >
        <h2>First Slide</h2>
        <p class="white-text">Etiam porta sem malesuada magna mollis euismod.</p>
      </div>  
    </div>
    <div class="carousel-item cc2 white-text" href="#two!">
      <div class="container">
        <h2>Second Slide</h2>
        <p class="white-text">Etiam porta sem malesuada magna mollis euismod.</p>
      </div>  
    </div>
    <div class="carousel-item cc3 white-text" href="#three!">
      <div class="container">
        <h2>Third Slide</h2>
        <p class="white-text">Etiam porta sem malesuada magna mollis euismod.</p>
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