import React from "react";
import Links from "./NavLinks";

function Menu() {
  return (
    <nav className="main_menu">
      <ul>
        <Links to="/">Home</Links>
        <Links to="/about">About</Links>
        <Links to="/portfolio">Portfolio</Links>
        <Links to="/contact">Contact</Links>
      </ul>
    </nav>
  );
}

export default Menu;
