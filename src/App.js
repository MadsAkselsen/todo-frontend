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

  const toggleComplete = (id) => {
    console.log("toggle is executing");
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          console.log(todo.complete);
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <p>Currently displays {todos.length} todos</p>
      <Form addNewTodo={addNewTodo} />
      <ListItems
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
