import React from 'react';
import 'materialize-css';


const Footer = () => {
    return (
        <div>
            <footer class="page-footer #000000 black">
                <div class="container">
                    <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">AstroLove</h5>
                        <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Links</h5>
                        <ul>
                        <li><a class="grey-text text-lighten-3" href="/aboutus">About Us</a></li>
                        <li><a class="grey-text text-lighten-3" href="/">Contact Us</a></li>
                        <li><a class="grey-text text-lighten-3" href="/">Other</a></li>
                        <li><a class="grey-text text-lighten-3" href="/">Other</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                    © 2021 Copyright Of All Times
                    <a class="grey-text text-lighten-4 right" href="/">More Links</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer