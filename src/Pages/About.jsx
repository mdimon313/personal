import React from "react";
import AboutMe from "../Components/AboutMe";
import Section from "../Components/Section";
import SectionTitle from "../Components/SectionTitle";
// import Skill from "../Components/Skill";

function About() {
  return (
    <Section sectionName={"about"}>
      <SectionTitle title={"About"} />
      <div className="about_content_wrapper">
        <div className="about_content">
          <AboutMe />
        </div>
        <div className="skill_content">
          <img src="./images/skill/html.png" alt="html" />
          <img src="./images/skill/css.png" alt="css" />
          <img src="./images/skill/JS.jpg" alt="javascript" />
          <img src="./images/skill/react.png" alt="reactjs" />
        </div>
      </div>
    </Section>
  );
}

export default About;
