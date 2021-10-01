import React from 'react'
import '../styles/portfolio.css'

function Portfolio() {
    return (
        <div>
            <section className="port">
                <h1>My Portfolio</h1>
                <div className="port-container">
                    <div className="port-cards">
                        <div className="top"></div>
                        <div className="bot">
                            <h4>PORTFOLIO 1</h4>
                            <button>View</button>
                        </div>
                    </div>
                    <div className="port-cards">
                        <div className="top"></div>
                        <div className="bot">
                            <h4>PORTFOLIO 2</h4>
                            <button>View</button>
                        </div>
                    </div>
                    <div className="port-cards">
                        <div className="top"></div>
                        <div className="bot">
                            <h4>PORTFOLIO 3</h4>
                            <button>View</button>
                        </div>
                    </div>
                    <div className="port-cards">
                        <div className="top"></div>
                        <div className="bot">
                            <h4>PORTFOLIO 4</h4>
                            <button>View</button>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Portfolio
