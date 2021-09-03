import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const options = {
  method: 'POST',
  url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
  params: {sign: 'capricorn', day: 'today'},
  headers: {
    'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
  }
};

const Dashboard = () => {
    const Daily = () =>axios.request(options).then(function (response) {
      
        console.log(response.data.description);
   }).catch(function (error) {
        console.error(error);
    });

    return (
        <div className="container">
            <div className="row #b0bec5 blue-grey lighten-3">

            <h3 className="col s12 m12 l12">Dashboard</h3>
            
            <div className="col s12 m12 l12">
            <Link to='/onlook'>
            <button className="newMatchesBtn right" id="newMatchesBtn">Find New Matches</button>
            </Link>
            </div>
            <div className="col s12 m12 l12">
            <button className="dailyScope right" id="dailyScope" onClick={Daily}>Daily Horoscope</button>
            </div>
            <div className="col s12 m12 l12">
            <button className="monthlyScope right" id="monthlyScope">Monthly</button>
            </div>
            </div>
        </div>
    )
}

export default Dashboard