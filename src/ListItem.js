import React from "react";

function ListItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div key={todo.id} style={{ display: "flex" }}>
      <input type="checkbox" onClick={() => toggleComplete(todo.id)}></input>
      <p
        style={{
          color: "white",
          textDecoration: todo.complete ? "line-through" : null,
        }}
      >
        {todo.title}
      </p>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default ListItem;
