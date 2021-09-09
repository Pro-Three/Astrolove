import React from 'react';
import '../time.css';

  const styles = {

    ul: {
        width: '800px',
        margin: '0 auto',
        padding: '0px',
        listStyle: 'none',
        textAlign: 'center'
    },
    li: {
        display: 'inline',
        fontSize: '10em',
        textAlign: 'center',
        textShadow: '0 0 5px #00c6ff'
    },
    profiles: {
        marginBottom: '200px'
    }

    
}

const Profile = () => {
    return (
        <div>
        <div class="clock">
            <div id="Date"></div>
                <ul style= {styles.ul}>
                    <li style= {styles.li} id="hours"></li>
                    <li style= {styles.li} id="point">:</li>
                    <li style= {styles.li} id="min"></li>
                    <li style= {styles.li} id="point">:</li>
                    <li style= {styles.li} id="sec"></li>
                </ul>
            <p class="flow-text center-align" id= "Date">It's Virgo Season!!!</p>    
        </div>
        <div className="container">
            <div style= {styles.profiles} className="row grey lighten-3 center">
                <div className="col s12 l12 m12">
                    <h3>Profile Details:</h3>
                </div>
                <div className="col s6 l6 m6 left" id="Name">
                    <ul>
                        <li>Name:</li>
                        <li>Sun Sign:</li>
                        <li>Other</li>
                        <li>Name:</li>
                        <li>Other</li>
                        <li>Other</li>
                    </ul>
                </div>
                <div className="col s6 l6 m6 left" id="Name">
                    <ul>
                        <li>User's Name</li>
                        <li>User's Sun Sign</li>
                        <li>Other</li>
                        <li>Other</li>
                        <li>Other</li>
                        <li>Other</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Profile