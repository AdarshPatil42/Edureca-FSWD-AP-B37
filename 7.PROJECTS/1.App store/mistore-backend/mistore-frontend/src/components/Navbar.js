import React from 'react'
import "../styles/nav.css"
import {Link} from "react-router-dom";



const Navbar = () => {
    return (
        <div className='nav '>
            
            <div className="logo">
                <Link to="/dsd">
                    <img id="logoImage" src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg" alt="Not" /> 
                </Link>
            </div>  
            
            <Link  className="navlinks" to="/#miphones">Mi Phones</Link>
            <Link   className="navlinks"  to="/#redmiphones">Redmi Phones</Link>
            <Link   className="navlinks" to="/#tv">TV</Link>
            <Link   className="navlinks" to="/#laptops">Laptops</Link>
            <Link   className="navlinks" to="/#lifestyle">Fitness & Lifestyle</Link>
            <Link  className="navlinks" to="/#home">Home</Link>
            <Link   className="navlinks" to="/#accessories">Accessories</Link>
            <Link   className="navlinks" to="/#audio">Radio</Link>

        </div>
    )
}

export default Navbar;