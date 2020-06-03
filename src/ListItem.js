import React, { useState } from "react";
import "./ListItem.css";

function ListItem({ todo, toggleComplete, deleteTodo, setUpdate, saveChange }) {
  const [editedTitle, setEditedTitle] = useState({ editedTitle: "" });

  const updateEditedTitle = (e) => {
    setEditedTitle({ editedTitle: e });
  };

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
          style={{
            width: "100%",
            padding: "5px",
            color: todo.complete ? "green" : null,
          }}
          type="text"
          id={todo.id}
          value={todo.title}
          onChange={(e) => {
            setUpdate(e.target.value, todo.id);
            updateEditedTitle(e.target.value);
          }}
        />
      </p>
      <button
        onClick={() => saveChange(editedTitle.editedTitle, todo.id)}
        style={{ height: "20px", marginRight: "5px", fontSize: "12px" }}
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
