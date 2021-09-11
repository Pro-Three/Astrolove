import React from 'react'
import '../chat.css';
import me from '../img/aries.jpg'
import me2 from '../img/virgo.jpg'


const Chats = () => {
  return (
    <div className="container">

<div className="container cyan accent-4">
    <div class="menu">
          <div class="back"><i class="fa fa-chevron-left"></i> <img src={me} draggable="false" alt="done"/></div>
            <div class="name">Hamlet</div>
        </div>

    <ol class="chat">
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false" alt="done"/></div>
      <div class="msg">
        <p>Hey, how are you?</p>
        <p>Does your horoscope like pizza?<emoji class="pizza"/></p>
        <time>September 8th, 2021</time>
      </div>
    </li>
    <li class="self">
        <div class="avatar"><img src={me2} draggable="false" alt="done"/></div>
      <div class="msg">
        <h6 style={{textDecoration: 'underline'}}>William</h6>
        <p>Hey what's up!</p>
        <p>I have to study for my React class... <emoji class="books"/></p>
        <p>Maybe another day</p>
        <time>September 8th, 2021</time>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false" alt="done"/></div>
      <div class="msg">
        <p>Guess what my horoscope said today??? <emoji class="suffocated"/></p>
        <time>September 8th, 2021</time>
      </div>
    </li>
    <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false" alt="done"/></div>
      <div class="msg">
      <h6 style={{textDecoration: 'underline'}}>William</h6>

        <p>Dude you can't always believe what the internet tells you</p>
        <time>September 8th, 2021</time>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false" alt="done"/></div>
      <div class="msg">
        <p><emoji class="scream"/></p>
        <p>That a virgo was going to come and ruin my life<emoji class="please"/></p>
        <time>September 8th, 2021</time>
      </div>
    </li>
    <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false" alt="done"/></div>
      <div class="msg">
        <img src="https://i.imgur.com/QAROObc.jpg" draggable="false"/>
        <h6 style={{textDecoration: 'underline'}}>William</h6>

        <p>That's super accurate bro no lie</p>
        <p>Dude read mine!!</p>
        <time>September 8th, 2021</time>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false" alt="done"/></div>
      <div class="msg">
        {/* <p>Gracias! <emoji class="hearth_blue"/></p> */}
        <p>Mercury is in retrograde be safe out there bro</p>
        <time>September 8th, 2021</time>
      </div>
    </li>
    
        {/* <div class="day">Hoy</div>
    <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
      <div class="msg">
        <p>Te apetece jugar a Minecraft?</p>
        <time>18:03</time>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
      <div class="msg">
        <p>Venga va, hace ya mucho que no juego...</p>
        <time>18:07</time>
      </div>
    </li>
    <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
      <div class="msg">
        <p>Ehh, me crashea el Launcher... <emoji class="cryalot"/></p>
        <time>18:08</time>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
      <div class="msg">
        <p><emoji class="lmao"/></p>
        <time>18:08</time>
      </div>
    </li>
    <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
      <div class="msg">
        <p>Es broma</p>
        <p>Ataque Moai!</p>
        <p><span><emoji class="moai"/></span><span><emoji class="moai"/></span><span><emoji class="moai"/></span><span><emoji class="moai"/></span><span><emoji class="moai"/></span><span><emoji class="moai"/></span></p>
        <time>18:09</time>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
      <div class="msg">
          <p>Copón</p>
        <p><emoji class="funny"/></p>
        <time>18:08</time>
      </div>
    </li>
    <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
      <div class="msg">
        <p>Hey there's a new update about this chat UI with more responsive elements! Check it now:</p>
        <p><a href="https://codepen.io/Varo/pen/YPmwpQ" target="parent">Chat UI 2.0</a></p>
        <time>18:09</time>
      </div>
    </li> */}
    
    </ol>

    {/* <input class="textarea" type="text" placeholder="Type here!"/><div class="emojis"></div>     */}
    </div>
    </div>
  );
}

export default Chats


// https://www.npmjs.com/package/@wealize/react-chat-window
// https://www.npmjs.com/package/react-chat-window