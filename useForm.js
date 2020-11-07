import React, {useState} from "react";

function useForm() {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setTodo(e.target.value)
  }

  function addTodo() {
    setTodos([...todos,
      {
        id: todos.length + 1,
        text: todo,
        completed: false,
      }
    ])
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(todo === '') return;
    addTodo();
    setTodo('')
  }

  function toggleTodo( todoId) {
    const updatedTodos = todos.map(todo => {
      return todo.id === todoId
      ? { ...todo, completed: !todo.completed }
      : todo;
    });
    setTodos(updatedTodos);
  };

  // function fielteredActive(todoChecked) {
  //   const showActiveTodos = todos
  //     .filter(todo => todo.checked === true)
  //     .map(todo => <h3>{todo.text}</h3>)
  //   setTodos(showActiveTodos);
  // }

  return [todo, todos, handleChange, handleSubmit, toggleTodo]

}

export default useForm;
