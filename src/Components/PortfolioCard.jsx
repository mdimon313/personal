import React from "react";

function PortfolioCard({ src, descTitle, descSubTitle, privLink }) {
  return (
    <div className="single_card">
      <img src={src} alt="card_img" />
      <div className="card_meta">
        <h3>{descTitle}</h3>
        <p> {descSubTitle} </p>
        <a href={privLink} target="_blank" rel="noreferrer">
          Privew
        </a>
      </div>
    </div>
  );
}

export default PortfolioCard;
