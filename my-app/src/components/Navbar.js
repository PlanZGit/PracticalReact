import React from "react";
import { NavLink } from "react-router-dom";
import { MdDonutSmall } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";

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
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <NavLink to="/upload">
          Upload
          <AiOutlineCloudUpload />
        </NavLink>

        <NavLink to="/icons">
          Icons
          <MdDonutSmall />
        </NavLink>
        <NavLink to="/notifications">
          Notifications
          <MdNotificationsActive />
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
