import React, { useState } from "react";
import { ClipLoader, BounceLoader, BarLoader } from "react-spinners";
import { SketchPicker } from "react-color";

const Loadingspinner = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#00F6FF");

  return (
    <div>
      <div
        style={{
          position: "fixed",
          left: "0",
          bottom: "0",

          zIndex: "2",
        }}>
        <SketchPicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
          disableAlpha={false}
        />
      </div>

      <a
        style={{
          border: "none",
          boxShadow: "none",
          color: "purple",
        }}
        href="https://www.davidhu.io/react-spinners/storybook/?path=/docs/barloader--main"
        target="_blank"
        rel="noreferrer">
        Loadingspinner Link
      </a>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "10px",
        }}>
        <ClipLoader size={50} color={color} />
        <BounceLoader size={50} color={color} />
        <BarLoader size={50} color={color} />
      </div>
    </div>
  );
};

export default Loadingspinner;
