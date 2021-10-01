import React from 'react'
import '../styles/contact.css'
import git from '../img/git.png'
import twitter from '../img/twitter.png'
import right from '../img/right.svg'
import leftt from '../img/leftt.svg'

function Contact() {
    return (
        <div>
            <section className="cnt">
                <div className="cnt_container">
                    <div className='rightt'> 
                        <img src={right} alt=""/>
                    </div>
                    <div><div className="cnt_text">
                        <h1>Let's <span className="work">Work</span></h1>
                        <p>I'm currently open to any freelancing work available,
                        to get in touch send a mail and we'll begin work!
                    </p>
                    </div>
                    <div className="socials">
                        <a href="https://github.com/hussainamusa"><img src={git} alt="github profile"/></a> &nbsp;
                        <a href="https://twitter.com/munchi__"><img src={twitter} alt=" twitter account"/></a>
                    </div>
                    <a className="hello" href="mailto:kennyamusa99@gmail.com">Mail me!</a></div>
                    <div className='rightt2'>
                        <img src={leftt} alt=""/>
                    </div>
                </div>
            </section>
            <section className="footer">
                <div className="foot-cnt">
                    <h4>Copyright 2021 by Kehinde</h4>
                </div>
            </section>
        </div>
    )
}

export default Contact
