import React from "react"


import Layout from "../components/layout"
import Contact from "../components/contact"
import Card from "../components/card"
import SEO from "../components/seo"
import ServicesHero from "../components/servicesHero"
import "../styles/services.scss"
import ServicesData from "../data/services.js"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <ServicesHero />
    <div className="site-container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
      { ServicesData.map(function(service, index) {
        return <Card key={ index } title={ service.title } content={ service.content } color={ service.color } />;
      })}
    </div>
    <Contact fullSize={false} />
  </Layout>
)

export default Services
