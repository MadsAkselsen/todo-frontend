import React from "react";
import "./ListItems.css";
import ListItem from "./ListItem";

function ListItems({ todos, toggleComplete, deleteTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <ListItem
          todo={todo}
          key={todo.id}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default ListItems;
