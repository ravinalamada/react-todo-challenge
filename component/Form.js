import React from 'react';
import useTodo from '../useTodo';
import {Switch, Route} from "react-router-dom";
import Home from './Home';
import Active from './Active';
import Completed from './Completed';

function Form() {

  const [todo, todos, handleChange, handleSubmit, toggleTodo] = useTodo();

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <fieldset className="fieldset">
        <label forhtml="todo-list"></label>
        <input type="text"
               value={todo}
               onChange={handleChange}
               id='todo-list' placeholder="Add detail"
               className="input-add"></input>
        </fieldset>
        <button className="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo =>(
          <li key={todo.id} className="items">
            <Switch>
                  <Route exact path="/">
                    <Home todo={todo} toggleTodo={toggleTodo} />
                  </Route>
                  <Route path="/Active">
                    <Active todo={todo} toggleTodo={toggleTodo}/>
                  </Route>
                  <Route path='/completed'>
                    <Completed todo={todo} toggleTodo={toggleTodo}/>
                  </Route>
              </Switch>
          </li>
        ))}
      </ul>

    </div>
    )
  }

  export default Form;


