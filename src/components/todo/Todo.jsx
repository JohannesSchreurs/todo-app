import React from 'react';

import './todo.scss';

import TodoStore from './TodoStore';
import TodoInput from './TodoInput';
import TodoList from "./TodoList";


const Todo = () => {
    return (
      <TodoStore>
        <div className="todo">
          <h1 className="todo__title">Todo app</h1>
          <TodoInput />
          <TodoList />
        </div>
      </TodoStore>
    )
}

export default Todo;
