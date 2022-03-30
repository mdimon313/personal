import React from "react";
import AboutMe from "../Components/AboutMe";
import Section from "../Components/Section";
import SectionTitle from "../Components/SectionTitle";
import Skill from "../Components/Skill";

function About() {
  return (
    <Section sectionName={"about"}>
      <SectionTitle title={"About"} />
      <div className="about_content_wrapper">
        <div className="about_content">
          <AboutMe />
        </div>
        <div className="skill_content">
          <Skill skillName={"html"} per={"99%"} />
          <Skill skillName={"css"} per={"95%"} />
          <Skill skillName={"javascript"} per={"75%"} />
          <Skill skillName={"reactjs"} per={"60%"} />
        </div>
      </div>
    </Section>
  );
}

export default About;
