import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function NavLinks({ to, children }) {
  const currentPath = useResolvedPath(to);
  const matchpath = useMatch({ path: currentPath.pathname, end: true });
  return (
    <li>
      <Link to={to} className={`nav_link ${matchpath ? "active" : ""}`}>
        {children}
      </Link>
    </li>
  );
}

export default NavLinks;
