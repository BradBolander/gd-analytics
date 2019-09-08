import React from "react"
import { Link } from "gatsby"
import "../styles/hero.scss"



const Hero = () => (
    <div className="hero">
        <div className="site-container">
            <h1>
                We Build<br/>
                Automation and Analytics<br/>
                Into Your Workflow<br/>
                So You Don’t Have To
            </h1>
            <p style={{ maxWidth: `408px`, marginBottom: `3rem` }}>
                Leverage automation to eliminate errors and spend time where it matters most - with your customers.
            </p>
            <Link className="btn-tertiary" to="/services">Learn How</Link>
        </div>
       
    </div>
)

export default Hero