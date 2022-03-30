import React from "react";
import Section from "../Components/Section";
import ContactLeftInfo from "../Components/ContactLeftInfo";
import ContactForm from "../Components/ContactForm";

function Contact() {
  return (
    <Section sectionName={"contact"}>
      <div className="contact_wrapper">
        <ContactLeftInfo
          title="Let's Talk"
          subTitle="Ask me anything or just say hi..."
          mapIcon="fal fa-map-marker-alt"
          map="Dhaka, Bangladesh"
          phoneIcon="fal fa-phone-alt"
          phone="+880 194 781 3505"
          mailIcon={"fal fa-envelope"}
          mail="imon266362@gmail.com"
          footerText="designed by imon"
        />
        <ContactForm btnIcon={"fal fa-paper-plane"} />
      </div>
    </Section>
  );
}

export default Contact;
