import React,{Suspense, useStae, useState} from 'react';
import TodoList from './TodoList';
const App = () => {
  const [task, setTask] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const changeHandler = e => {
    setTask(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };

  const deleteHandler = indexValue => {
    const newTodos = todos.filter((todo, index) => index!== indexValue);
    setTodos(newTodos);
  };

  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Todo Management Application</h5>
          <form onSubmit={submitHandler}>
            <input type="text" name="task" value={task} onChange={changeHandler} class="form-control" placeholder="Enter task" />
            <button type="submit" class="btn" >Add</button>
          </form>
          <ul class="todo-list">
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button class="delete-btn" onClick={() => deleteHandler(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
