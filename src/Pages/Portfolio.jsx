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
          privLink="https://mdimon313.github.io/portfolio/"
        />

        <PortfolioCard
          src={"./images/p5.jpg"}
          descTitle="Agency Landing Page"
          descSubTitle="Convert PSD to HTML Reen Agency landing page, this page design with HTML, CSS only"
          privLink="https://mdimon313.github.io/reen-psd-to-html/"
        />

        <PortfolioCard
          src={"./images/p1.jpg"}
          descTitle="Computer Accesories Landing Page"
          descSubTitle="This is my first web design with HTML CSS. and this website is not compatable for mobile device."
          privLink="https://mdimon313.github.io/template-design1/"
        />

        <PortfolioCard
          src={"./images/p2.jpg"}
          descTitle="Software Agency Landing Page"
          descSubTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          privLink="https://mdimon313.github.io/template-design2/"
        />

        <PortfolioCard
          src={"./images/p4.jpg"}
          descTitle="Simple e-commerce single Page design"
          descSubTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
          privLink="https://mdimon313.github.io/template_design-6/"
        />

        <PortfolioCard
          src={"./images/p6.jpg"}
          descTitle="Convert Wordpress website"
          descSubTitle="Inventore unde, est magni, explicabo ex ut, mollitia libero ab nihil quo nisi iste architecto molestias cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magnam, explicabo id excepturi veritatis odit."
          privLink="https://mdimon313.github.io/engitech/"
          onGoing="true"
        />
      </div>
    </Section>
  );
}

export default Portfolio;
