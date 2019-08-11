import React from "react"
import Logos from "../images/logos.png"
import "../styles/software.scss"



const Software = () => (    
    <div style={{ backgroundColor: `white` }}>
        <div className="site-container">
            <div className="software">
                <div className="content">
                    <h3 style={{ fontSize: `32px` }}>Technologies We Use</h3>
                    <p style={{ maxWidth: `320px` }}>
                        We can get your company up to date with industry standard software, or work with the tools you already use. 
                    </p>
                </div>
                <div className="logos">
                    <img src={Logos} />
                </div>
            </div>
        </div>
    </div>
)

export default Software