import React, { useState, useEffect } from "react";
import Form from "./Form";
import axios from "axios";
import ListItems from "./ListItems";
import "./App.css";

const api = axios.create({
  baseURL: `https://matodo.umbrellacorp.org/todos`,
});

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (todos.length === 0) {
      api
        .get("/")
        .then((res) => {
          //backend is sorting the todos in its own way, so we have to do our own sorting here
          const sortedTodos = res.data.sort((a, b) => (a.id > b.id ? 1 : -1));
          console.log("setting todos initially");
          setTodos(sortedTodos);
        })
        .catch((error) => console.error(error));
    }
  });

  const getTodos = (res) => {
    //backend is sorting the todos in its own way, so we have to do our own sorting here
    const sortedTodos = res.data.sort((a, b) => (a.id > b.id ? 1 : -1));
    console.log("setting todos", sortedTodos);
    setTodos(sortedTodos);
  };

  const addNewTodo = (newTodo) => {
    api
      .post("/", {
        title: newTodo.title,
      })
      .then(function (response) {
        console.log("adding new todo", response);
        if (response) {
          api
            .get("/")
            .then(getTodos)
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //*Update input on each todo
  const setUpdate = (newTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: newTitle };
        }

        return todo;
      })
    );
  };

  const saveChange = (newTitle, id) => {
    console.log(newTitle);
    api
      .patch(`/${id}`, {
        title: newTitle,
      })
      .then(function (response) {
        console.log("changing todo", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //! This should be refactored. code too long
  const toggleComplete = (id) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        if (todos[i].complete === 0) {
          api
            .patch(`/${id}`, {
              complete: 1,
            })
            .then(function (response) {
              console.log("patching todo", response);
              if (response) {
                api
                  .get("/")
                  .then(getTodos)
                  .catch(function (error) {
                    console.log(error);
                  });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          api
            .patch(`/${id}`, {
              complete: 0,
            })
            .then(function (response) {
              console.log("patching todo", response);
              if (response) {
                api
                  .get("/")
                  .then(getTodos)
                  .catch(function (error) {
                    console.log(error);
                  });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
    }
  };

  const deleteTodo = (id) => {
    api
      .delete(`/${id}`)

      .then(function (response) {
        console.log("deleting todo", response);
        if (response) {
          api
            .get("/")
            .then(getTodos)
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div style={{ backgroundColor: "rgb(11, 2, 37)" }}>
        <h1>TODOS</h1>
        <Form addNewTodo={addNewTodo} />
      </div>
      <div style={{ backgroundColor: "rgb(240, 240, 240)", padding: "10px" }}>
        <ListItems
          todos={todos}
          toggleComplete={toggleComplete}
          setUpdate={setUpdate}
          deleteTodo={deleteTodo}
          saveChange={saveChange}
        />
      </div>
    </div>
  );
}

export default App;
