import React, { useState } from "react";

function Form({ addNewTodo }) {
  const [newTodo, newSetTodo] = useState({
    title: "",
  });

  const handleChange = (e) => {
    newSetTodo({
      ...newTodo,
      title: e.target.value,
    });
  };

  //Make a new todo object
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.title !== "") {
      addNewTodo({
        ...newTodo,
        id: Date.now(),
      });
      newSetTodo({
        ...newTodo,
        title: "",
      });
    }
  };

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit} id="to-do-form">
        <input
          type="text"
          placeholder="Enter Text"
          value={newTodo.title}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
