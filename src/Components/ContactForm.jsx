import React from "react";
import FormInput from "./FormInput";

function ContactForm({ btnIcon }) {
  return (
    <div className="contactRight">
      <form>
        <div className="name_email_input">
          <div className="name">
            <label htmlFor="Name">Name</label>
            <FormInput
              type={"text"}
              name="name"
              placeholder={"Jhon Doe"}
              autoComplete="off"
              id="name"
            />
          </div>
          <div className="mail">
            <label htmlFor="email">Email</label>
            <FormInput
              type={"email"}
              name="email"
              placeholder={"example@gmail.com"}
              autoComplete="off"
              id="email"
            />
          </div>
        </div>
        <div className="msg">
          <label htmlFor="msg">Message</label>
          <textarea name="msg" placeholder="your message" id="msg"></textarea>
        </div>
        <button>
          Send <i className={btnIcon}></i>{" "}
        </button>
      </form>

      <div className="contact_icons">
        <a
          href="https://www.facebook.com/imon313/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com/MohammdImon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/mohammdimon313/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mohammd-imon-313im/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
}

export default ContactForm;
