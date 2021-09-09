import React from 'react';
import 'materialize-css';
import { FaGithub} from "react-icons/fa";

const styles = {
footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    }
}

const Footer = () => {
    return (
        // <div>
        //     <footer className="page-footer #000000 black" style= {styles.footer}>
        //         <div className="container">
        //             <div className="row">
        //             <div className="col l6 s12">
        //                 <h5 className="white-text">AstroLove</h5>
        //                 <p className="grey-text text-lighten-4">Thank you for getting this far!</p>
        //             </div>
        //             <div className="col l4 offset-l2 s12">
        //                 <h5 className="white-text">Links</h5>
        //                 <ul>
        //                 <li><a className="grey-text text-lighten-3" href="/aboutus">About Us</a></li>
        //                 <li><a className="grey-text text-lighten-3" href="/contact">Contact Us</a></li>
        //                 </ul>
        //             </div>
        //             </div>
        //         </div>
        //         <div className="footer-copyright">
        //             <div className="container">
        //             © 2021 Copyright Of All Times
        //             <a className="grey-text text-lighten-4 right" href="/">More Links</a>
        //             </div>
        //         </div>
        //     </footer>
        // </div>

	        // <footer style= {styles.footer}>
		    //     <nav> 
			//         <div className="nav-wrapper ##ff6f00 amber darken-4">
			// 	        <ul className="right">
            //               <li><a href="/aboutus">About Us</a></li>
            //               <li><a href="/contact">Contact Us</a></li>
	        <footer style= {styles.footer}>
		        <nav> 
			        <div class="nav-wrapper deep-purple lighten-1">
				        <ul class="right">
					        <li><a class= "col"href="https://github.com/Pro-Three/Astrolove/tree/main"> <FaGithub  size={30}/> </a></li>
				        </ul>
                             <p>&copy; Copyright. All Rights Reserved</p>
			        </div>
		        </nav>
	        </footer>
    )
}

export default Footer