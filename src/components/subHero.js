import React from "react"
import { Link } from "gatsby"
import Check from "../images/icon-check.svg"
import "../styles/subHero.scss"



const SubHero = () => (
    <div className="site-container">
        <div className="subHero">
            <div className="inner">  
                <div className="left">
                    <h2>
                        Stop wasting time.
                    </h2>
                    <p style={{ maxWidth: `408px`, marginBottom: `2rem` }}>
                        A computer can do most of the things your employees do every day.
                    </p>
                    <p style={{ maxWidth: `408px` }}>
                        We can set it up for you.
                    </p>
                </div>
            
                
                <div className="quick-services">
                    <span>
                        <img src={Check} />
                        Sales analytics
                    </span>
                    <span>
                        <img src={Check} />
                        Inventory reporting
                    </span>
                    <span>
                        <img src={Check} />
                        Warehouse management
                    </span>
                    <span>
                        <img src={Check} />
                        Any other key bullet points you want
                    </span>
                </div>
            </div>
        </div>
    </div>

)

export default SubHero