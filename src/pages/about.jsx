import React from "react"

import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Caption = styled.center`
  opacity: 65%;
  margin-top: -20px;
`

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
    <img src={require("../images/about_image.png")} alt="My friends and I" />
    <Caption>
      <small>My friends and I, and the car (hint: that's me in the pink)</small>
    </Caption>
    <hr />
    <p>
      Hi there, my name is Sam Pratt and I'm a 21 year old developer from
      Victoria, BC. I have always been facinated by computers and how they work
      since I was a kid, and am now learning and growing to become the best
      front end developer I can. You can find some of my work on{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/samuel-pratt"
      >
        my GitHub
      </a>
      .
    </p>
    <p>
      Some non-computer hobbies of mine include cooking and cars. I worked as a
      line cook during my second year of university, and am always looking for
      ways to improve my culinary chops. I also enjoy working on my 2001 Subaru
      Outback, not the most luxurious car, but a fun one to drive and modify,
      and is great for road trips.
    </p>
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
    <h3>Some Of My Work</h3>
    <p>
      All my projects (including this one!) can be found on{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/samuel-pratt"
      >
        my GitHub
      </a>
      , but the one I'm proudest of recently though is FerryTimes. When first
      looking for project ideas I wanted to make a simple app to show what ferry
      would be next, only to learn that BC Ferries doesn't have a public API. So
      I took my first dive into backend code and built one. It's written almost
      entirely in Python, and consists of a web scraper and a Flask app to
      handle requests. It was the biggest project I had taken from start to
      finish and I learned more about coding, API's, and how frustrating it can
      be to host than I would anywhere else. It is hosted live{" "}
      <a target="_blank" rel="noreferrer" href="https://ferrytimes.ca">
        here
      </a>{" "}
      and the code can be found on{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/samuel-pratt"
      >
        my GitHub
      </a>
      .
    </p>
  </Layout>
)

export default AboutPage
