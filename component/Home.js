import React from 'react';

function Home({todo, toggleTodo}) {
  return (
    <>
      <>
        <input type="checkbox" onClick={() => toggleTodo(todo.id)}></input>
        <label className={todo.completed ? 'completed--todo' : undefined}>{todo.text}</label>
      </>
  </>
  )
}

export default Home;
