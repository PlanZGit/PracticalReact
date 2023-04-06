import React, { useState } from "react";
import {
  SketchPicker,
  PhotoshopPicker,
  BlockPicker,
  ChromePicker,
} from "react-color";

const Colorpicker = () => {
  const [color, setColor] = useState("#fff");
  const [completedColor, setCompletedColor] = useState("#fff");

  const [showPicker, setShowPicker] = useState(true);

  const handleChangeComplete = () => {
    setCompletedColor(color);
  };

  return (
    <div>
      <div>react-color</div>
      <h2>Picked color : {color}</h2>
      <h2>Completed Picked color : {completedColor}</h2>

      <button onClick={() => setShowPicker(!showPicker)}>
        {showPicker ? "Close" : "Open"}
      </button>

      {showPicker ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}>
          <ChromePicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
            onChangeComplete={handleChangeComplete}
            disableAlpha={false}
          />
          <SketchPicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
          <BlockPicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
          <PhotoshopPicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Colorpicker;
