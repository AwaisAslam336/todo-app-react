import React from "react";
import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [getItems, setItems] = useState([]);

  function show(item,index){
    return (<li key={index}>{item}</li>);
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
          {getItems.map((item,index)=> (<li key={index}>{item}</li>))}
        </ul>
      </div>
    </div>
  );
}

export default App;
