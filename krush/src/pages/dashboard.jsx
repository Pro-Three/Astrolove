import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'



const sunsign = localStorage.getItem("sunsign")
console.log(sunsign)
const options = {
  method: 'POST',
  url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
  params: {sign: sunsign, day: 'today'},
  headers: {
    'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
  }
};

const styles = {
  button: {
      width: '150px',
      height: '35px',
      color: 'white',
      marginTop: '5px',
      marginBottom: '5px',
      padding: "auto"
  }
}

const Dashboard = () => {
    const Daily = () =>axios.request(options).then(function (response) {
        console.log(response.data.description);
   }).catch(function (error) {
        console.error(error);
    });

    return (
        <div className="container">
            <div className="row grey lighten-3">

            <h3 className="col s12 m12 l12">Dashboard</h3>
            
            <div className="col s12 m12 l12">
            <Link to='/onlook'>
            <button style= {styles.button} className="newMatchesBtn right waves-effect waves-light btn deep-purple lighten-1 btn-medium" id="newMatchesBtn">Find New Matches</button>
            </Link>
            </div>
            <div className="col s12 m12 l12">
            <button style= {styles.button} className="dailyScope right waves-effect waves-light btn deep-purple lighten-1 btn-medium" id="dailyScope" onClick={Daily}>Daily Horoscope</button>
            </div>
            <div className="col s12 m12 l12">
            <button style= {styles.button} className="monthlyScope right waves-effect waves-light btn deep-purple lighten-1 btn-medium" id="monthlyScope">Monthly</button>
            </div>
            </div>
        </div>
    )
}

export default Dashboard