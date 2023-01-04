import React, { useState } from "react";

function TodoItem(props){
    return (<li onClick={()=>{props.onCheckeddd(props.index)}}>
        {props.item}
        </li>);
}

export default TodoItem;