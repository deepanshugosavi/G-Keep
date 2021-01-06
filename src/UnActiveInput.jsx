import React from "react";

function UnActiveInput(props) {
  return (
    <div className="input__unactive" onClick={props.onClick}>
      Write a note...
    </div>
  );
}

export default UnActiveInput;
