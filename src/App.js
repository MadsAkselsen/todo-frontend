import React, { useState } from "react";
import ListItems from "./ListItems";

import "./App.css";

function App() {
  const [todo, setTodo] = useState({
    items: [],
    currentItem: {
      text: "",
      key: "",
    },
  });

  const handleChange = (e) => {
    setTodo({
      ...todo,
      currentItem: {
        ...todo.currentItem,
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = todo.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...todo.items, newItem];
      setTodo({
        ...todo,
        items: newItems,
        currentItem: {
          ...todo.currentItem,
          text: "",
          key: "",
        },
      });
    }
  };

  return (
    <div className="App">
      <header>
        <form onSubmit={handleSubmit} id="to-do-form">
          <input
            type="text"
            placeholder="Enter Text"
            value={todo.currentItem.text}
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </header>
    </div>
  );
}

export default App;
