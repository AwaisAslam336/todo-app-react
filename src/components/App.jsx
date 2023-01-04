import React from "react";
import { useState } from "react";
import InputArea from "./InputArea";
import TodoItem from "./TodoItem";

function App() {
  //store array of items/tasks list
  const [getItems, setItems] = useState([]);

  function deletItem(index) {
    setItems((preValue) => {
      //return all items whom index is not equal to given index
      //means: delete/exclude item at given index
      return preValue.filter((value, ind) => {
        return ind !== index;
      });
    });
  }
  function submited(newItem) {
    setItems((preValue) => {
      //return all previous items list + new item
      //means: add new given item in items array
      return [...preValue, newItem];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      {/* call submited function when onAdd function get called in child component */}
      <InputArea onAdd={submited} />
      <div>
        <ul>
          {
            //render all items 1 by 1 in ul->li
            getItems.map((item, index) => {
              return (
                <TodoItem
                  key={index}
                  onCheckeddd={deletItem}
                  index={index}
                  item={item}
                />
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
