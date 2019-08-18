import React from "react"


import Layout from "../components/layout"
import Hero from "../components/hero"
import SubHero from "../components/subHero"
import Software from "../components/software"
import Contact from "../components/contact"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <SubHero />
    <Software />
    <Contact fullSize={true} />
  </Layout>
)

export default IndexPage
