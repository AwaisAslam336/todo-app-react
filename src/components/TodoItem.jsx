import React from "react";

function TodoItem(props) {
  //list item HTML/jsx
  return (
    <li
      onClick={() => {
        //call onCheckeddd from props-->delete item from items array on given index
        props.onCheckeddd(props.index);
      }}
    >
      {
        //shows a item from items list in li
        props.item
      }
    </li>
  );
}

export default TodoItem;
