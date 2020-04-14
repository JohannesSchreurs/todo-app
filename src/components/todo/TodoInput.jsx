import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoStore';

const TodoInput = () => {
    const [todo, setTodo] = useState("");
    const { dispatch } = useContext(TodoContext);

    const submitHandler = e => {
        e.preventDefault();
        if(todo.length > 0) {
            dispatch({
                type: 'ADD_TODO',
                payload: {
                    name: todo,
                    id: (Math.random()*100000).toFixed(0),
                    isDone: false
                } 
            });
            setTodo('');
        }
    }

    return (
        <form className="todo__input-form" onSubmit={submitHandler}>
            <label className="todo__input-label">Add todo</label>
            <input className="todo__input-field" type="text" placeholder="Add a todo" value={todo} onChange={e => setTodo(e.target.value)}/>
        </form>
    )
}

export default TodoInput
