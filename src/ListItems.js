import React from "react";
import "./ListItems.css";
import ListItem from "./ListItem";

function ListItems({ todos, updateChange }) {
  return (
    <div>
      {todos.map((todo) => (
        <ListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default ListItems;
