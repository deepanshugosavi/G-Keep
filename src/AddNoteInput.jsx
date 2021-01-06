import React, { useState } from "react";
import ActiveInput from "./ActiveInput";
import UnActiveInput from "./UnActiveInput";

function AddNoteInput(props) {
  const [activeStatus, changeStatus] = useState(false);
  const handleOnClick = () => {
    changeStatus(!activeStatus);
  };
  if (activeStatus)
    return (
      <ActiveInput onClick={handleOnClick} onAddClick={props.onAddClick} />
    );
  return <UnActiveInput onClick={handleOnClick} />;
}

export default AddNoteInput;
