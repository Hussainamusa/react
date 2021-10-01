import React from 'react'
import '../styles/nav.css'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    
                    
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"> <li>About</li> </Link>
                    <Link to="/contact"> <li>Contact</li> </Link>
                    <li>Services</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
