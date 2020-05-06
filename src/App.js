import React, { useState, useEffect } from "react";
import Form from "./Form";
import axios from "axios";
import ListItems from "./ListItems";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (todos.length === 0) {
      axios
        .get("https://matodo.umbrellacorp.org/todos") //
        .then((res) => {
          setTodos(res.data);
        })
        .catch((error) => console.error(error));
    }
  });

  const addNewTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <p>Currently displays {todos.length} todos</p>
      <Form addNewTodo={addNewTodo} />
      <ListItems todos={todos} />
    </div>
  );
}

export default App;
