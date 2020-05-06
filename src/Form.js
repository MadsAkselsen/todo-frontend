import React, { useState } from "react";

function Form({ addNewTodo }) {
  const [newTodo, newSetTodo] = useState({
    title: "",
    id: "",
    complete: false,
  });

  const handleChange = (e) => {
    newSetTodo({
      ...newTodo,
      title: e.target.value,
      id: Date.now(),
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
    <div className="App">
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