import React from "react";

function Section({ sectionName, children }) {
  return (
    <section className={sectionName}>
      <div className="container">{children}</div>
    </section>
  );
}

export default Section;
