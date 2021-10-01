import React from 'react'
import {Helmet} from 'react-helmet'
import '../styles/home.css'
// import {Link} from 'react-router-dom'
import Subnote from './Subnote'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Navbar from './Navbar'

function Home() {
    return (
        <div>
            <Helmet>
                <title>Amusa Kehinde</title>
            </Helmet>
            {/* <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
            </nav> */}
            <Navbar/>
            <section className="lnd-label">
            <svg id="circle" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
            <svg id="plus" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                <div className="label-ctn">
                    <h1>Design . <br/> <span>Development</span></h1>
                    <div className="skills">
                        <h4>HTML</h4>
                        <h4>.</h4>
                        <h4>CSS</h4>
                        <h4>.</h4>
                        <h4>JavaScript</h4>
                    </div>
                </div>
            </section>
            <section className="name">
                <div className="name_ctn">
                    <h2>
                        <span>Hello,</span> <br/>
                        I'm Amusa Kehinde
                    </h2>
                    <button>CONTACT ME</button>
                </div>
            </section>
            <Subnote/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}

export default Home;