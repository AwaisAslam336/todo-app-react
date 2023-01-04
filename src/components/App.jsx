import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [newItem, setNewItem] = useState("");
  const [getItems, setItems] = useState([]);

  function deletItem(index){
    setItems((preValue)=>{
      return preValue.filter((value,ind)=>{
        return ind !== index;
      })
    
    })
  }
  function submited(){
    setItems((preValue)=>{
      return [...preValue,newItem]
    });
    setNewItem("");
  }
  function itemValue(event){
    const value = event.target.value;
    setNewItem(value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={itemValue} value={newItem} />
        <button onClick={submited}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {getItems.map((item,index)=> {
            return (<TodoItem key={index} onCheckeddd={deletItem} index={index} item={item} />);
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
