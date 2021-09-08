import React, { Suspense } from 'react';
import { useImage } from 'react-image';



function MyImageComponent() {
    const {src} = useImage({
      srcList: 'https://cdn.theatlantic.com/media/mt/science/cat_caviar.jpg',
    })

    return <img src={src} />
}

const Matches = () => {
    return (
        <div className="container">
            <div className="row grey lighten-3">
                <h3 className="center">Match Name</h3>
                <div className="col s6 m6 l6">
                    <Suspense fallback={<div>Loading</div>}>
                        <MyImageComponent />
                    </Suspense>
                </div> 

                <div className="col s3 m3 l3">
                    <h4>Match Sign:</h4>
                    <h5 className="center">Leo!</h5>
                    <h5 className="center">♌️</h5>
                    <h4>Match Score:</h4>
                    <h5 className="center">90%</h5>
                </div>
                <div className="col s3 m3 l3">
                    <p className="paragraphs">Something about the people like profiles, likes, etc.</p>
                </div>
            </div>
        </div>
    )
}

export default Matches