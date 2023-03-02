import React from "react";
import { NavLink } from "react-router-dom";
import { MdDonutSmall } from "react-icons/md";

function Navbar() {
  return (
    <div
      style={{
        marginBottom: "50px",
      }}
    >
      <p
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: "0px",
        }}
      >
        Practical React
      </p>
      <NavLink to="/icons">
        Icons
        <MdDonutSmall />
      </NavLink>
    </div>
  );
}

export default Navbar;
