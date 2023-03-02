import React from "react";
import { IconContext } from "react-icons";
import { MdDonutSmall } from "react-icons/md";
import { ImPen, ImQuill, ImMusic } from "react-icons/im";
import { FaSortAlphaDown } from "react-icons/fa";
import { CgSortAz } from "react-icons/cg";

function Icons(props) {
  const { color } = props;
  console.log(color);
  return (
    <div>
      <IconContext.Provider
        value={{ color: color ? color : "black", size: "10rem" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <MdDonutSmall />
          <ImPen />
          <ImQuill size="100px" />
          <ImMusic size="50px" />
          <FaSortAlphaDown size="25px" />
          <CgSortAz />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Icons;
