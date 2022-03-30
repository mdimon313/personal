import React from "react";
import SkillLabel from "./SkillLabel";
import SkillRang from "./SkillRang";

function Skill({ skillName, per }) {
  return (
    <div className="skill">
      <SkillLabel skillName={skillName} per={per} />
      <SkillRang per={per} rangName={skillName} />
    </div>
  );
}

export default Skill;
