import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-wrapper">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="xychart">XY Chart</Link>
        </li>
        <li>
          <Link to="piechart">Pie Chart</Link>
        </li>
        <li>
          <Link to="radarchart">Radar Chart</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
