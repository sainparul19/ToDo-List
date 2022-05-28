import React from "react";

function TodoList({ todos, handleDelete, handleEdit }) {
  return (
    <ul className="list">
      {todos.map((t) => (
        <li className="singletodo">
          <span className="listText" key={t.id}>
            {t.todo}
          </span>
          <button onClick={() => handleEdit(t.id)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
