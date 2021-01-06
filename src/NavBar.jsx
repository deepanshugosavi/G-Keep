import React from "react";
import { IconContext } from "react-icons/lib";
import { FaRegStickyNote } from "react-icons/fa";

function NavBar(props) {
  return (
    <div className="header__display">
      <div className="icon__display">
        <IconContext.Provider value={{ size: "40px", color: "white" }}>
          <FaRegStickyNote />
        </IconContext.Provider>
      </div>
      <div className="label__display">G-Keep</div>
    </div>
  );
}

export default NavBar;
