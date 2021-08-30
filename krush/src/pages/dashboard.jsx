import React from 'react';

const Dashboard = () => {
    return (
        <div className="container">
            <div className="row #b0bec5 blue-grey lighten-3">

            <h3 className="col s12 m12 l12">Dashboard</h3>

            <div className="col s12 m12 l12">
            <button className="newMatchesBtn right" id="newMatchesBtn">Find New Matches</button>
            </div>
            <div className="col s12 m12 l12">
            <button className="dailyScope right" id="dailyScope">Daily Horoscope</button>
            </div>
            <div className="col s12 m12 l12">
            <button className="monthlyScope right" id="monthlyScope">Monthly</button>
            </div>
            </div>
        </div>
    )
}

export default Dashboard