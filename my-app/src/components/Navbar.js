import React from "react";
import { NavLink } from "react-router-dom";
import { MdDonutSmall } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiWindow } from "react-icons/bi";
import { GrTooltip } from "react-icons/gr";

function Navbar() {
  return (
    <div
      style={{
        marginBottom: "50px",
      }}>
      <p
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: "0px",
        }}>
        Practical React
      </p>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}>
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

        <NavLink to="/modal">
          Modal
          <BiWindow />
        </NavLink>

        <NavLink to="/Tooltip">
          Tooltip
          <GrTooltip />
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
