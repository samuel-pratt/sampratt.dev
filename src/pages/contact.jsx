import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, "about"]} />
    <h3>Contact</h3>
    <p>Under Construction</p>
    <form name="contact" netlify></form>
  </Layout>
)

export default AboutPage
