import React, { useState } from "react";
import Links from "./NavLinks";

function Menu() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="main_menu">
      <ul className={toggle ? "active" : ""}>
        <Links to="/">Home</Links>
        <Links to="/about">About</Links>
        <Links to="/portfolio">Portfolio</Links>
        <Links to="/contact">Contact</Links>
      </ul>
      <div className="nav_mobile_menu">
        {toggle ? (
          <i onClick={() => setToggle(false)} className="fal fa-times"></i>
        ) : (
          <i onClick={() => setToggle(true)} className="fal fa-bars"></i>
        )}
      </div>
    </nav>
  );
}

export default Menu;
