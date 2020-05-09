import React from "react";
import "./ListItems.css";
import ListItem from "./ListItem";

function ListItems({ todos, toggleComplete, deleteTodo, setUpdate }) {
  return (
    <div>
      {todos.map((todo) => (
        <ListItem
          todo={todo}
          key={todo.id}
          toggleComplete={toggleComplete}
          setUpdate={setUpdate}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default ListItems;
