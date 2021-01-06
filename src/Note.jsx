import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

function Note(props) {
  return (
    <div className="card__display">
      <div className="card__title">{props.title}</div>
      <div className="card__note">{props.note_data}.</div>
      <div id="delete__icon" onClick={() => props.onRemoveClick(props.index)}>
        <IconContext.Provider value={{ color: "red", size: "30px" }}>
          <AiFillDelete />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Note;
