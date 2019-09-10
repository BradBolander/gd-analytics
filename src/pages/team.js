import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Contact from "../components/contact"
import SEO from "../components/seo"
import LinkedInIcon from "../images/linkedin.svg"
import "../styles/team.scss"

const Team = () => (
  <Layout>
    <SEO title="Our Team" />
    <div className="site-container" style={{backgroundColor: 'white'}}>
        <div className="intro">
            <h1>Our Team</h1>
            <p>
                Our experience in the Motorsports and advanced data analysis industry has 
                prepared us for rapid product delivery that performs to the highest possible standard. 
                We apply best practices learned in the fast paced racing world to help 
                your organization operate lean and mean!
            </p>
        </div>
        <div className="team-member">
            <span className="name">Drew Hanover</span>
            <span className="role">Co-founder</span>
            <a href="https://www.linkedin.com/in/drew-hanover-b1b9baa5/" target="_blank"><img src={LinkedInIcon} className="li-icon" /></a>
            <span className="specialty">Analytics and Automation Lead</span>
            <p className="description">
                Racecars, Rockets, and Robots. Extensive experience in statistical methods including machine learning, 
                computer vision, robotics, and automation. Drew is a published author within the field of Optimal Control, 
                and has spent time developing novel solutions for NASA, General Motors, and Corvette Racing. He is certified 
                as a Six Sigma Black Belt and strives for lean processes across all business units.
            </p>
        </div>
        <div className="team-member">
            <span className="name">Guido Francesco Ritelli, PhD</span>
            <span className="role">Co-founder</span>
            <a href="https://www.linkedin.com/in/guido-francesco-ritelli-ph-d-72b22554/" target="_blank"><img src={LinkedInIcon} className="li-icon" /></a>
            <span className="specialty">Data Pipeline and Analysis Guru</span>
            <p className="description">
                Automation, Optimization, and Performance analysis. Deep understanding of data analysis and metrics extraction. 
                Extensive expertise in process optimization. Proven record of data analytics and data management systems development 
                for highly competitive racing and industry solutions. NSF funded and author of several articles published 
                in international journals in the field of non-model based controls development and optimization.
            </p>
        </div>
    </div>
    <Contact fullSize={false} />
  </Layout>
)

export default Team
