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
              inputId="name"
              placeholder={"Jhon Doe"}
              autocomplete="off"
            />
          </div>
          <div className="mail">
            <label htmlFor="email">Email</label>
            <FormInput
              type={"email"}
              name="email"
              inputId="email"
              placeholder={"example@gmail.com"}
              autocomplete="off"
            />
          </div>
        </div>
        <div className="msg">
          <label htmlFor="msg">Message</label>
          <textarea name="msg" id="msg" placeholder="your message"></textarea>
        </div>
        <button>
          Send <i className={btnIcon}></i>{" "}
        </button>
      </form>

      <div class="contact_icons">
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
    </div>
  );
}

export default ContactForm;
