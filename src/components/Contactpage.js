import React from 'react'
import Navbar from './Navbar'
import '../styles/contactpage.css'
import git from '../img/git.png'
import twitter from '../img/twitter.png'
import linkedin from '../img/linked2.png'
// import address from '../img/address.png'
// import { useEffect } from 'react'
function Contactpage() {
  
    return (
        <div>
            <Navbar />
            <section className="cnt2">
                <div className="cnt-top-container">
                    <div>
                        <h1>Get In <span className='touch'>Touch</span></h1>
                        <p>Lore ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita, magni dolorem minima eveniet fugiat ea commodi ab nisi exercitationem. <br/>
                         <br/> Location: Lagos, Nigeria</p>
                    </div>
                </div>
                <div className="cnt-bottom-container">
                    <div className='gets'>
                    
                        <a href="https://twitter.com/munchi__"><li><img className='getss'src={twitter} alt="twitter"/></li></a>
                        <a href="https://github.com/hussainamusa"><li><img className='getss'src={git} alt="github"/></li></a>
                        <a href="https://www.linkedin.com/in/kehinde-amusa-59a94b18a/"><li><img className='getss'src={linkedin} alt="LinkedIn"/></li></a>
                    </div>
                    <div className='mailbox'>
                    <a href="mailto:kennyamusa99@gmail.com"><button className="boxm">Mail me!</button></a>
                    </div>
               
                </div>
                {/* <div className="address">
                     <li><img className='getss'src={address} alt="address"/>Lagos, Nigeria</li>
                </div> */}
            </section>
        </div>
    )
}

export default Contactpage
