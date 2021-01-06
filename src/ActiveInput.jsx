import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IconContext } from "react-icons/lib";

function ActiveInput(props) {
  const [title, setTitle] = useState("");
  const [note_data, setNoteData] = useState("");

  const handleOnChange = (event) => {
    if (event.target.id === "title__input") {
      setTitle(event.target.value);
    } else {
      setNoteData(event.target.value);
    }
  };
  return (
    <div className="input__active">
      <input
        id="title__input"
        type="text"
        placeholder="Title"
        autoComplete="off"
        value={title}
        onChange={handleOnChange}
      />
      <textarea
        id="note__input"
        type="text"
        placeholder="Write a note..."
        autoComplete="off"
        value={note_data}
        onChange={handleOnChange}
      />
      <div className="close__btn" onClick={props.onClick}>
        Close
      </div>
      <div
        className="add__icon"
        onClick={() => {
          setTitle("");
          setNoteData("");
          props.onAddClick({ title: title, note_data: note_data });
        }}
      >
        <IconContext.Provider
          value={{
            color: "orangered",
            size: "34px",
            style: { boxShadow: "1px 1px grey" },
          }}
        >
          <IoMdAdd />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default ActiveInput;
