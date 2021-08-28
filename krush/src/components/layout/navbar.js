import React from 'react';
import 'materialize-css';


const Navbar = () => {
    return (
        <div>
        <nav>
            {/* PRE-LOGIN...? */}
            <div class="nav-wrapper">
            <a href="/" class="brand-logo">AstroLove</a>
            {/* AFTER LOGIN */}
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/chats">Chats</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/matches">Matches</a></li>
            </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navbar