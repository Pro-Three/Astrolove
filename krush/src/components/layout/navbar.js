import React from 'react';
import 'materialize-css';


const Navbar = () => {
    return (
        <div>
        <nav>
            <div class="nav-wrapper #000000 black">
            <a href="/" class="brand-logo">AstroLove</a>
            
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                {/* PRE-LOGIN...? */}
                <li><a href="/onload">Onload</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/createaccount">Create</a></li>
                {/* AFTER LOGIN */}
                <li><a href="/onlook">OnLook</a></li>
                <li><a href="/chats">Chats</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/matches">Matches</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navbar