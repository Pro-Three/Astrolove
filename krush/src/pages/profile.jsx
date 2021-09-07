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

    
}

const Profile = () => {
    return (
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
    )
}

export default Profile