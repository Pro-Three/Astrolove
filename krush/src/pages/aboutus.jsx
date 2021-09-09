import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import me from '../img/virgo.jpg'

function AboutUs() {
  useEffect(() => {
    addResponseMessage('Welcome to this **awesome** chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

    return (
      <div className="App">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={me}
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />
      </div>
    );
}

// export default AboutUs;

// import React from 'react';

// const AboutUs = () => {
//     return (
//         <div className="container">
//             <div className="row grey lighten-3">

//             <h4>We Are Here for You</h4>

//             <p>Thank you for asking about us!</p>

//             </div>
//         </div>
//     )
// }

export default AboutUs