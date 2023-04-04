import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./Tooltip.css";

const Tooltip = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <div>
        Tippys has auto positioning, top,left,down,right <br />
        <Tippy
          placement="left"
          arrow={true}
          delay={100}
          content={<span>Hello, Build from Tippy</span>}>
          <button>Button</button>
        </Tippy>
        <Tippy
          placement="top-end"
          arrow={true}
          content="Hello, Build from Tippy">
          <button>Button</button>
        </Tippy>
        <Tippy
          placement="bottom-start"
          arrow={true}
          content="Hello, Build from Tippy">
          <button>Button</button>
        </Tippy>
        <Tippy placement="right" arrow={true} content="Hello, Build from Tippy">
          <button>Button</button>
        </Tippy>
      </div>

      <div className="tooltip">
        self built
        <button className="btn">Button</button>
        <span>Hello, Build from CSS</span>
      </div>
    </div>
  );
};

export default Tooltip;
