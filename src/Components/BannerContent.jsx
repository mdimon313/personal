import React from "react";
import { Link } from "react-router-dom";

function BannerContent() {
  return (
    <div className="banner_content">
      <div class="banner-icons">
        <a
          href="https://www.facebook.com/imon313/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com/MohammdImon"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/mohammdimon313/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mohammd-imon-313im/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <h1>Mohammd Imon</h1>
      <p>i'm Imon, front-end developer frasher</p>
      <div className="buttns">
        <Link to={"/about"} className="banner_btn">
          About Us
        </Link>
        <Link to={"/contact"} className="banner_btn">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default BannerContent;
