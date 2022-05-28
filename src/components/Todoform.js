import React from "react";

function Todoform({ handleSubmit, todo, editId, setTodo }) {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">{editId ? "edit" : "Go"}</button>
    </form>
  );
}

export default Todoform;
