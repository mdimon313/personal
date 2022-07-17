import React from "react";
import Section from "../Components/Section";
import PortfolioCard from "../Components/PortfolioCard";
import SectionTitle from "../Components/SectionTitle";

function Portfolio() {
  return (
    <Section sectionName="portfolio">
      <SectionTitle title={"Portfolio"} />
      <div className="portfolio_card_wrapper">
        <PortfolioCard
          src={"./images/p8.jpg"}
          descTitle="Multipage Portfolio website"
          descSubTitle="It is a multipage portfolio website. It is made with HTML, CSS and JAVASCRIPT functionality and will look good on mobile device."
          privLink="#"
        />

        <PortfolioCard
          src={"./images/p5.jpg"}
          descTitle="Agency Landing Page"
          descSubTitle="Convert PSD to HTML Reen Agency landing page, this page design with HTML, CSS only"
          privLink="#"
        />

        <PortfolioCard
          src={"./images/p1.jpg"}
          descTitle="Computer Accesories Landing Page"
          descSubTitle="This is my first web design with HTML CSS. and this website is not compatable for mobile device."
          privLink="#"
        />

        <PortfolioCard
          src={"./images/p2.jpg"}
          descTitle="Software Agency Landing Page"
          descSubTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          privLink="#"
        />

        <PortfolioCard
          src={"./images/p4.jpg"}
          descTitle="Simple e-commerce single Page design"
          descSubTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
          privLink="#"
        />

        <PortfolioCard
          src={"./images/p6.jpg"}
          descTitle="Convert Wordpress website"
          descSubTitle="Inventore unde, est magni, explicabo ex ut, mollitia libero ab nihil quo nisi iste architecto molestias cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magnam, explicabo id excepturi veritatis odit."
          privLink="#"
          onGoing="true"
        />
      </div>
    </Section>
  );
}

export default Portfolio;
