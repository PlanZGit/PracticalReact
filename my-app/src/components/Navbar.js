import React from "react";
import { NavLink } from "react-router-dom";
import { MdDonutSmall } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { AiOutlineCloudUpload, AiOutlineTool } from "react-icons/ai";
import { BiWindow, BiTimer } from "react-icons/bi";
import { CgColorPicker } from "react-icons/cg";
import { BsCreditCard } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";

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
          flexWrap: "wrap",
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

        <NavLink to="/tooltip">
          Tooltip
          <AiOutlineTool />
        </NavLink>

        <NavLink to="/countup">
          countup
          <BiTimer />
        </NavLink>

        <NavLink to="/idletimer">
          Idletimer
          <BiTimer />
        </NavLink>

        <NavLink to="/colorpicker">
          Colorpicker
          <CgColorPicker />
        </NavLink>

        <NavLink to="/creditcards">
          Creditcard
          <BsCreditCard />
        </NavLink>

        <NavLink to="/datepicker">
          Datepicker
          <CiCalendarDate />
        </NavLink>

        <NavLink to="/videoplayer">
          Videoplayer
          <CiCalendarDate />
        </NavLink>

        <NavLink to="/loadingspinner">
          Loadingspinner
          <CiCalendarDate />
        </NavLink>

        <NavLink to="/charts">
          Charts
          <CiCalendarDate />
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
