import React, { useState } from 'react';
import useForm from '../useForm'

function Active({todo, toggleTodo}) {
  console.log(todo);
  return (
    <>
      {!todo.completed ?
      <>
        <input type="checkbox" onClick={() => toggleTodo(todo.id)}></input>
        <label className={todo.completed ? 'completed--todo' : undefined}>{todo.text}</label>
      </>
      : null
      }
    </>
  )
}

export default Active;
