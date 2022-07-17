import React from "react";
// import { useState } from "react";

function PortfolioCard({ src, descTitle, descSubTitle, privLink, onGoing }) {
  const construction = onGoing;

  return (
    <div className="single_card">
      {construction ? <span className="on_going">under construction</span> : ""}
      <div className="card_img">
        <img src={src} alt="card_img" />
      </div>
      <div className="card_meta">
        <h3>{descTitle}</h3>
        <p> {descSubTitle} </p>
        <a href={privLink} target="_blank" rel="noreferrer">
          Live
        </a>
      </div>
    </div>
  );
}

export default PortfolioCard;
