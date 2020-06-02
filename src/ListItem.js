import React from "react";
import "./ListItem.css";

function ListItem({ todo, toggleComplete, deleteTodo, setUpdate, saveChange }) {
  return (
    <div
      className="list"
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
        readOnly
      ></input>
      <p
        style={{
          width: "80%",
        }}
      >
        <input
          style={{ width: "100%", color: todo.complete ? "green" : null }}
          type="text"
          id={todo.id}
          value={todo.title}
          onChange={(e) => {
            //setUpdate(e.target.value, todo.id);
          }}
        />
      </p>
      <button
        onClick={() => saveChange(todo.id)}
        style={{ height: "20px", fontSize: "12px" }}
      >
        Save
      </button>
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
