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
                <h3 className="center">The people you 100%</h3>
                <div className="col s6 m9 l9">
                    <Suspense fallback={<div>Loading</div>}>
                        <MyImageComponent />
                    </Suspense>
                </div> 

                <div className="col s12 m3 l3">
                    <h6>Match Name</h6>
                    <h6>Match Sign</h6>
                    <h5>Match Score</h5>
                </div>
            </div>

            <div className="row grey lighten-3">
                <h3 className="center">The people you 75%</h3>
                <div className="col s12 m9 l9">
                    <Suspense fallback={<div>Loading</div>}>
                        <MyImageComponent />
                    </Suspense>
                </div> 

                <div className="col s12 m3 l3">
                    <h6>Match Name</h6>
                    <h6>Match Sign</h6>
                    <h5>Match Score</h5>
                </div>
            </div>

            <div className="row grey lighten-3">
            <h3 className="center">The people you 50%-0%</h3>
                <div className="col s12 m9 l9">
                    <Suspense fallback={<div>Loading</div>}>
                        <MyImageComponent />
                    </Suspense>
                </div> 

                <div className="col s12 m3 l3">
                    <h6>Match Name</h6>
                    <h6>Match Sign</h6>
                    <h5>Match Score</h5>
                </div>
            </div>

            
            

            

        </div>
    )
}

export default Matches