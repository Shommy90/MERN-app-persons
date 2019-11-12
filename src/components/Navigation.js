import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="bg-dark px-3 py-2">
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link text-white">
            Table
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/create" className="nav-link text-white">
            Create Person
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
