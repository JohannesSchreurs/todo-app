import React, {useContext} from 'react';
import { TodoContext } from './TodoStore';

import TodoItem from "./TodoItem";

const TodoList = () => {
    const { state } = useContext(TodoContext);

    return (
        <ul className="todo__list">
            {state && state.map(todo => <TodoItem key={todo.id} name={todo.name} isDone={todo.isDone} id={todo.id} />)}
        </ul>
    )
}

export default TodoList
