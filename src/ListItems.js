import React from "react";
import "./ListItems.css";
import ListItem from "./ListItem";

function ListItems({
  todos,
  toggleComplete,
  deleteTodo,
  setUpdate,
  saveChange,
}) {
  return (
    <div>
      {todos.map((todo) => (
        <ListItem
          todo={todo}
          key={todo.id}
          toggleComplete={toggleComplete}
          setUpdate={setUpdate}
          deleteTodo={deleteTodo}
          saveChange={saveChange}
        />
      ))}
    </div>
  );
}

export default ListItems;
