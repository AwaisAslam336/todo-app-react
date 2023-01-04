import React, { useState } from "react";

function InputArea(props) {
  //state to hold value of input text for new item
  const [newItem, setNewItem] = useState("");

  function holdItemValue(event) {
    //set input text to setNewItem
    setNewItem(event.target.value);
  }

  //input and button HTML/jsx
  return (
    <div className="form">
      <input type="text" onChange={holdItemValue} value={newItem} />
      <button
        onClick={() => {
          //call onAdd function from props--> add item to items array
          props.onAdd(newItem);
          //clear the input text for new entry
          setNewItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
