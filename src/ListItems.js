import React from "react";
import "./ListItems.css";
import ListItem from "./ListItem";

function ListItems({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <ListItem todo={todo} />
      ))}
    </div>
  );
}

export default ListItems;
