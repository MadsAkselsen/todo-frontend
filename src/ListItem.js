import React from "react";

function ListItem({ todo }) {
  return (
    <div>
      <input type="text" value={todo.title}></input>;
    </div>
  );
}

export default ListItem;
