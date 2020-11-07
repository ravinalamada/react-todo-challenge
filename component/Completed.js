import React from 'react';

function Completed({todo, toggleTodo}) {
  return (
    <>
      {todo.completed ?
      <>
        <input type="checkbox" onClick={() => toggleTodo(todo.id)}></input>
        <label className={todo.completed ? 'completed--todo' : undefined}>{todo.text}</label>
      </>
      : null
      }
    </>
  )
}

export default Completed;
