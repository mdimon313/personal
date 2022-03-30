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
          src={"./images/p1.png"}
          descTitle="Computer Accesories Landing Page"
          descSubTitle="This is single page landing page, this page design with HTML, CSS only"
          privLink="#"
        />
        <PortfolioCard
          src={"./images/p2.png"}
          descTitle="Software Agency Landing Page"
          descSubTitle="This is Software Agency landing page, this page design with HTML, CSS only"
          privLink="#"
        />
        <PortfolioCard
          src={"./images/p4.png"}
          descTitle="Simple e-commerce single Page design"
          descSubTitle="This is Software Agency landing page, this page design with HTML, CSS only"
          privLink="#"
        />
        <PortfolioCard
          src={"./images/p5.png"}
          descTitle="Agency Landing Page"
          descSubTitle="Convert PSD to HTML Reen Agency landing page, this page design with HTML, CSS only"
          privLink="#"
        />
        <PortfolioCard
          src={"./images/p6.png"}
          descTitle="Convert Wordpress website"
          descSubTitle="Convert Wardpres to Html Agency website, this page design with HTML, CSS only"
          privLink="#"
        />
        <PortfolioCard
          src={"./images/p8.png"}
          descTitle="Multipage Portfolio website"
          descSubTitle="Multipage Portfolio website, this page design with HTML, CSS, Javascript"
          privLink="#"
        />
      </div>
    </Section>
  );
}

export default Portfolio;
