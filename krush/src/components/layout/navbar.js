import React from 'react';
import 'materialize-css';


const Navbar = () => {
    return (
        // <div>
        // <nav>
        //     <div class="nav-wrapper #000000 black">
        //     <a href="/" class="brand-logo">AstroLove</a>
            
        //     <ul id="nav-mobile" class="right hide-on-med-and-down">
        //         {/* PRE-LOGIN...? */}
        //         <li><a href="/onload">Onload</a></li>
        //         <li><a href="/login">Login</a></li>
        //         <li><a href="/createaccount">Create</a></li>
        //         {/* AFTER LOGIN */}
        //         <li><a href="/onlook">OnLook</a></li>
        //         <li><a href="/chats">Chats</a></li>
        //         <li><a href="/profile">Profile</a></li>
        //         <li><a href="/matches">Matches</a></li>
        //         <li><a href="/logout">Logout</a></li>
        //     </ul>
        //     </div>
        // </nav>
        // </div>

        <nav class="nav-wrapper indigo transparent z-depth-0">
        <div class="container">
            <a href="/" class="brand-logo">AstroLove</a>
            <a href="/" class="sidenav-trigger" data-target="mobile-links">
                <i class="material-icons">menu</i>
            </a>

            <ul class="right hide-on-med-and-down">
                {/* PRE-LOGIN...? */}
                {/* <li><a href="/aboutus">aboutUs</a></li> */}

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

        <ul class="sidenav" id="mobile-links">
                <li><a href="/onload">Onload</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/createaccount">Create</a></li>
                <li><a href="/onlook">OnLook</a></li>
                <li><a href="/chats">Chats</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/matches">Matches</a></li>
                <li><a href="/logout">Logout</a></li>
        </ul>
        </nav>

    


    )
}

export default Navbar