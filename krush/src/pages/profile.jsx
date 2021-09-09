import React, { Suspense } from 'react';
import { useImage } from 'react-image';
import '../time.css';

function MyImageComponent() {
    const {src} = useImage({
      srcList: 'https://cdn.theatlantic.com/media/mt/science/cat_caviar.jpg',
    })

    return <img src={src} />
}

  const styles = {

    ul: {
        width: '800px',
        margin: '0 auto',
        listStyle: 'none',
        textAlign: 'center'
    },
    li: {
        display: 'inline',
        fontSize: '350%',
        textAlign: 'center',
        textShadow: '0 0 5px #00c6ff'
    },
    profiles: {
        marginBottom: '200px'
    },
    otherList: {
        fontSize: '125%'
    }

    
}

const Profile = () => {
    return (
        <div>
        <div className="clock z-depth-2">
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
        <div className="container z-depth-2">
            <div style= {styles.profiles} className="row grey lighten-3 center">
                <div className="col s12 l12 m12">
                    <h3>Profile Details:</h3>
                    <Suspense fallback={<div>Loading</div>}>
                        <MyImageComponent />
                    </Suspense>
                </div>
                <div style= {styles.otherList} className="col s6 l6 m6 left" id="Name">
                    <ul>
                        <li>Name:</li>
                        <li>Sun Sign:</li>
                        <li>Gender:</li>
                        <li>Desired Relationship Preference:</li>
                    </ul>
                </div>
                <div style= {styles.otherList} className="col s6 l6 m6 left" id="Name">
                    <ul>
                        <li>User's Name</li>
                        <li>User's Sun Sign</li>
                        <li>Gender</li>
                        <li>Desired Relationship Preference</li>
                    </ul>
                </div>
                <div className="col s12 m6 l6 center push-l3">
                    <p>The song came from the bathroom belting over the sound of the shower's running water. It was the same way each day began since he could remember. It listened intently and concluded that the singing today was as terrible as it had ever been.</p>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Profile


// https://randomwordgenerator.com/paragraph.php