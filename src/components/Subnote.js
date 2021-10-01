import React from 'react'
import '../styles/subnote.css'
// import PC from '../img/pcs.png'
import ReactTypingEffect from 'react-typing-effect'

function Subnote() {
    return (
        <div>
            <section className="sub">
                <div className="sub_container">
                    <div className="left">
                        <h2> About <span className="f">ME</span></h2>
                        <p>A web designer, developer and User Interface Designer,
                    who bases his work on <span className="one">minimalism</span> and yet <span className="two">creative</span> and
                    interesting User Interface. <br /> Based in Lagos, Nigeria. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid illum accusamus, neque, impedit quam commodi ea harum delectus culpa quia expedita nulla! Error, nihil laudantium! In recusandae consectetur similique mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eaque iure fugit omnis odio quo reprehenderit? Unde commodi, at dolores accusamus itaque quae aspernatur adipisci eaque molestiae enim atque perferendis.</p>
                    </div>
                    <div className="right">
                    <ReactTypingEffect
                    text={["HTML5", "CSS3","JavaScript", "ReactJS", "VueJS", "and good search ability😉" ]}
                    speed={100}
                    eraseDelay={400}
                    eraseSpeed={300}/>
                    
                
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Subnote