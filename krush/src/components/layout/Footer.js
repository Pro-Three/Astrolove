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