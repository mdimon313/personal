import React from "react";

function SkillLabel({ skillName, per }) {
  return (
    <p className={skillName}>
      <strng>{skillName}</strng>
      <em>{per}</em>
    </p>
  );
}

export default SkillLabel;
