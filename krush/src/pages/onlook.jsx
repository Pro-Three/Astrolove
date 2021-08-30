import React from 'react';

const OnLook = () => {
    return (
        <div className="container">
            <div className="row #b0bec5 blue-grey lighten-3">
                <h3>SUCCESSFUL MATCH!!!</h3>

                <div className="col s12 m9 l9">Picture</div> 

                <div className="col s12 m3 l3">
                    <h6>Match Name</h6>
                    <h6>Match Sign</h6>
                    <h5>Match Score</h5>
                </div>

                <div className="col s12 m12 l12 center">
                    <button className="swipeLike" id="swipeLike">Swipe Like</button>
                    <button className="sendGoodVibes" id="sendGoodVibes">Send Good Vibes</button>
                    <button className="continueJourney" id="continueJourney">Continue the Journey</button>
                </div> 

            </div>
        </div>
    )
}

export default OnLook