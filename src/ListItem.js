import React from "react";

function ListItem({ todo }) {
  return (
    <div key={todo.id}>
      <p>{todo.title}</p>
    </div>
  );
}

export default ListItem;
