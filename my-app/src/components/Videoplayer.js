import React from "react";

export const Videoplayer = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}>
        HTMl - iframe tag
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/7sDY4m8KNLc?list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM"
          title="Practical React - 12 - Video Player"
          // frameborder="0"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        ></iframe>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}></div>
    </div>
  );
};
