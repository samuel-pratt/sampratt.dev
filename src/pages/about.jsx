import React from "react"

import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SkillTable = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  p {
    color: black;
    min-width: 200px;
    margin: 20px;
    span {
      font-size: 20px;
      margin-right: 5px;
      color: red;
    }
  }
`

const Skill = styled.p`
  margin: 50px 0;
  width: 100%;
`

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, "about"]} />
    <h3>About Me</h3>
    <p>
      Hi there, my name is Sam Pratt and I'm a 21 year old developer from
      Victoria, BC.
    </p>
    <p>paragraph 2</p>
    <h3>My Skills</h3>
    <SkillTable>
      <row>
        <Skill>
          <span>&#9675;</span> Javascript ES6
        </Skill>
        <Skill>
          <span>&#9675;</span> HTML & CSS
        </Skill>
      </row>
      <row>
        <Skill>
          <span>&#9675;</span> React + Hooks
        </Skill>
        <Skill>
          <span>&#9675;</span> SASS
        </Skill>
      </row>
      <row>
        <Skill>
          <span>&#9675;</span> Styled-Components & Emotion
        </Skill>
        <Skill>
          <span>&#9675;</span> Git
        </Skill>
      </row>
    </SkillTable>
  </Layout>
)

export default AboutPage
