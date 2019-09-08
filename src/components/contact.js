import React from "react"
import Abstract from "../images/abstract.png"
import "../styles/contact.scss"



const Contact = (props) => (    
    <div style={{ backgroundColor: `white` }}>
        <div className="site-container">
           <div id="contact" className="contact">
                {props.fullSize === true &&
                    <div className="greeting">
                        <div className="image-wrap">
                        <img src={Abstract} />
                        </div>      
                        <div className="content">
                            <h3>Let's get&nbsp;<br /> acquainted</h3>
                            <p style={{ maxWidth: `255px` }}>We work directly with you to determine the best tools for your company.</p>
                        </div>
                    </div>
                }
         
               <div className="form">
                   <h4>Get in touch</h4>
                   <input className="email field" type="email" placeholder="Email"></input>
                   <textarea className="message field" placeholder="Your message..."></textarea>
                   <button className="btn-primary">Send</button>
               </div>
           </div>
        </div>
    </div>
)

export default Contact