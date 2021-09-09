import React, { Suspense } from 'react'
import { useImage } from 'react-image'

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
        marginRight: '5px',
        padding: "auto"
    },
    box: {
        marginBottom: "200px"
    },
    otherList: {
        fontSize: '125%',
        marginTop: '20px'
    },
    para: {
        marginTop: '20px',
    },
    parat: {
        paddingRight: '5px',
        paddingLeft: '5px'
    }
}

const OnLook = () => {
    return (
        <div className="container">
            <div style= {styles.box} className="row grey lighten-3">
                <h3 className="center">Potential Match</h3>
                <div className="col s12 m12 l12 center">
                    <Suspense fallback={<div>Loading</div>}>
                        <MyImageComponent />
                    </Suspense>
                </div> 

                <div style= {styles.otherList} className="col s3 m3 l3 center">
                    <ul>
                        <li>User's Name</li>
                        <li>User's Sun Sign</li>
                        <li>Gender</li>
                        <li>Desired Relationship Preference</li>
                    </ul>
                </div>
                
                <div style= {styles.para} className="col s9 m9 l9 center">
                    <p style= {styles.parat} className="paragraphs">There are only three ways to make this work. The first is to let me take care of everything. The second is for you to take care of everything. The third is to split everything 50 / 50. I think the last option is the most preferable, but I'm certain it'll also mean the end of our marriage.</p>
                </div>

                <div className="col s12 m12 l12 center">
                    <button style= {styles.button} className="sendGoodVibes waves-effect waves-light btn deep-purple lighten-1 btn-medium" id="sendGoodVibes">Like</button>
                    <button style= {styles.button} className="continueJourney waves-effect waves-light btn deep-purple lighten-1 btn-medium" id="continueJourney">Continue -></button>
                </div> 

            </div>
        </div>
    )
}

export default OnLook