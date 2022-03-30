import React from "react";
import BannerContent from "../Components/BannerContent";
import Section from "../Components/Section";
function Home() {
  return (
    <>
      <Section sectionName={"banner"}>
        <div className="banner_grid">
          <BannerContent />
          <div className="banner_img">
            <img src="./images/amir.png" alt="banner_img" />
          </div>
        </div>
      </Section>
    </>
  );
}

export default Home;
