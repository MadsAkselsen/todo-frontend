import React from "react";

function ListItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <input
        checked={todo.complete ? true : false}
        type="checkbox"
        onClick={() => toggleComplete(todo.id)}
      ></input>
      <p
        style={{
          width: "70%",
          color: "white",
          textDecoration: todo.complete ? "line-through" : null,
        }}
      >
        {todo.title}
      </p>
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{ height: "20px", fontSize: "12px" }}
      >
        Delete
      </button>
    </div>
  );
}

export default ListItem;
