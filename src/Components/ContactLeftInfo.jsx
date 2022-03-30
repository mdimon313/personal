import React from "react";

function ContactLeftInfo({
  title,
  subTitle,
  phoneIcon,
  phone,
  mapIcon,
  map,
  mailIcon,
  mail,
  footerText,
}) {
  return (
    <div className="contactInfoLeft">
      <h3>{title}</h3>
      <p> {subTitle} </p>
      <ul>
        <li>
          <a href="https://goo.gl/maps/uaC3jhkhKsJupW4f9">
            <i className={mapIcon}></i>
            {map}
          </a>
        </li>
        <li>
          <a href="tel:+8801947813505">
            <i className={phoneIcon}></i>
            {phone}
          </a>
        </li>
        <li>
          <a href="mailto:imon263662@gmailcom">
            <i className={mailIcon}></i>
            {mail}
          </a>
        </li>
      </ul>
      <p className="foot">{footerText}</p>
    </div>
  );
}

export default ContactLeftInfo;
