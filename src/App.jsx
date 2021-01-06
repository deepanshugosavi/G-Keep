import React, { useState } from "react";
import AddNoteInput from "./AddNoteInput";
import NavBar from "./NavBar";
import Note from "./Note";

function App(props) {
  const [notes, setNote] = useState([]);
  const handleAddNote = (note) => {
    if (note.title !== "" && note.note_data !== "") setNote([...notes, note]);
  };
  const handleRemoveNote = (i) => {
    console.log(i);
    let newNote = notes.filter((value, index) => {
      if (index !== i) return value;
      return null;
    });
    setNote([...newNote]);
  };

  return (
    <div className="global__conatainer">
      <NavBar />
      <div className="input__display">
        <AddNoteInput onAddClick={handleAddNote} />
      </div>
      <div className="note__display">
        {notes.map((value, index, arr) => {
          return (
            <Note
              key={index}
              onRemoveClick={handleRemoveNote}
              title={value.title}
              note_data={value.note_data}
              index={index}
            />
          );
        })}
        {/* <Note />
        <Note />
        <Note />
        <Note />
        <Note /> */}
      </div>
    </div>
  );
}

export default App;
