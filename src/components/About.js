import React from 'react'
// import { Link, Route } from 'react-router-dom'
import '../styles/about.css'
import Navbar from './Navbar'
import line from '../img/horizontal-line.svg'
// import Resume from '../../Si'
function About() {
    return (
        <div>
            <Navbar />
            {/* <Link to='/'>Home</Link> */}
            <section className="top">
                <div className="top-container">
                    <h1>ABOUT <span className='san'>ME</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reprehenderit aut voluptatum iusto aspernatur iure, sapiente, velit inventore accusantium magni rem molestiae pariatur molestias eveniet. Amet odit nisi ea dolorum nemo culpa explicabo totam sint facilis. Obcaecati fuga fugiat quisquam adipisci beatae ipsa doloremque sed dolores quos deserunt minus optio expedita reiciendis provident, alias hic. Officiis necessitatibus non odit quia quos. Ratione laudantium dolor ducimus reprehenderit, qui explicabo incidunt iure quaerat minima quibusdam illum veniam eius fugit suscipit at dicta obcaecati saepe culpa voluptas consectetur enim delectus, porro assumenda. Unde laborum cum expedita placeat itaque iusto rem aperiam magni! Placeat ad reiciendis alias quo molestias cumque enim labore tempore nihil velit consequatur, omnis incidunt culpa illum perferendis delectus ipsa explicabo.</p>
                </div>
            </section>
            <section className="exp">
                <h1>Experience</h1>
                <div className='after'></div>
                <div className="exp-container">
                    <div className="expdata">
                        <div className='cv'>
                            <img className='line' src={line} alt=""/>
                            <div>
                                <h4>Bachelors Degree: Computer Science</h4>
                                <p>Bowen University (2017-2021)</p>
                            </div>
                        </div>
                       <div className='cv'>
                           <img className='line' src={line} alt=""/>
                           <div>
                           <h4>Industrial Training:</h4>
                            <p>New Horizons Systems Solutions- 6Months</p>
                           </div>
                       </div>
                       <div className='cv'>
                           <img className='line' src={line} alt=""/>
                           <div>
                           <h4>Freelancing:</h4>
                            <p>For As Long As I Can Remember</p>
                           </div>
                       </div>
                    </div>
                    <a href='CV.docx' title='My Resume' download><button className='cv-btn'>Download CV</button></a>
                </div>
            </section>
            <section className="footerz"></section>
        </div>
    )
}

export default About
