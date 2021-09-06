import React from 'react';
import 'materialize-css';


const Navbar = () => {
    return (
        <div>
        <nav>
            <div className="nav-wrapper #ff6f00 amber darken-4 z-depth-3">
            <a href="/" className="brand-logo center">AstroLove</a>
            
            <ul id="nav-mobile" className="right hide-on-med-and-down">
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