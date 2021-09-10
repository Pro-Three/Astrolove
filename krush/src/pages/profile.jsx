import React, { Suspense }  from 'react';
import { useUserContext } from '../utils/UserContext';
import { useImage } from 'react-image';
import '../time.css';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { get } from 'http';
// const userEmail = localStorage.getItem()

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
    const [{ currentUser }, { setCurrentUser }] = useUserContext();
    const userEmail = localStorage.getItem('email')
<<<<<<< HEAD
    const { data, loading, error } = useQuery(QUERY_USER, {
        variables: { email: userEmail}
   });
    console.log('CURRENT USER (state) (profile):  ', currentUser);
    
    // const queryResponse = user({
    //      variables: { email: userEmail}
    // });
    
    console.log('PROFILE - USER INFO - data.user:  ', data)
=======
    console.log('PROFILE - from localStorage - EMAIL:  ', userEmail)
    const { data, loading, error } = useQuery(QUERY_USER, {
        variables: { email: userEmail}
   });
    // console.log('CURRENT USER (state) (profile):  ', currentUser);
    // console.log('PROFILE - USER INFO - error', error)
    // console.log('PROFILE - USER INFO - data.user:  ', data.user)
>>>>>>> 3151dd2ad9e3a49d171dd2768937e1b04e0a195f
    

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
                        <li>Email:</li>
                        <li>Display Name:</li>
                        <li>Sun Sign:</li>
                        <li>Gender:</li>
                        <li>Desired Relationship Preference:</li>
                    </ul>
                </div>
                <div style= {styles.otherList} className="col s6 l6 m6 left" id="Name">
                    <ul>
                        <li>{data?.user.firstName} {data?.user.lastName}</li>
                        <li>{data?.user.email}</li>
                        <li>{data?.user.username}</li>
                        <li>{data?.user.signSun}</li>
                        <li>{data?.user.gender}</li>
                        <li>{data?.user.desiredRelationshipPref}</li>
                    </ul>
                </div>
                <div className="col s12 m6 l6 center push-l3">
                    <p>{data?.user.aboutMe}</p>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Profile


// https://randomwordgenerator.com/paragraph.php