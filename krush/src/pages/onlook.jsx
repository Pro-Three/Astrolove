import React, {Suspense} from 'react'
import {useImage} from 'react-image'

function MyImageComponent() {
    const {src} = useImage({
      srcList: 'https://cdn.theatlantic.com/media/mt/science/cat_caviar.jpg',
    })

    return <img src={src} />
}

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

const OnLook = () => {
    return (
        <div className="container">
            <div className="row grey lighten-3">
                <h3>SUCCESSFUL MATCH!!!</h3>

                <div className="col s12 m9 l9">
                <Suspense>
                    <MyImageComponent />
                </Suspense>
                </div> 

                <div className="col s12 m3 l3">
                    <h6>Match Name</h6>
                    <h6>Match Sign</h6>
                    <h5>Match Score</h5>
                </div>

                <div className="col s12 m12 l12 center">
                    <button style= {styles.button} className="sendGoodVibes waves-effect waves-light btn deep-purple lighten-1 btn-medium" id="sendGoodVibes">Say Hello</button>
                    <button style= {styles.button} className="continueJourney waves-effect waves-light btn deep-purple lighten-1 btn-medium" id="continueJourney">Continue -></button>
                </div> 

            </div>
        </div>
    )
}

export default OnLook