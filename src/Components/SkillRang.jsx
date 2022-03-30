import React from "react";

function SkillRang({ rangName, per }) {
  const rangStyle = {
    width: per,
  };
  return (
    <div className={`skill_range ${rangName}`}>
      <div className="range_prev" style={rangStyle}></div>
    </div>
  );
}

export default SkillRang;
