import React, { useContext, useState } from 'react'
import { TodoContext } from './TodoStore';

const TodoItem = ({name, isDone, id}) => {
    const { dispatch } = useContext(TodoContext);
    const [toggleUpdate, setToggleUpdate] = useState(false);
    const [todo, setTodo] = useState("");

    const removeHandler = () => {
        dispatch({
            type: "REMOVE_TODO",
            payload: id,
        })
    }

    const doneHandler = () => {
        dispatch({
            type: "TOGGLE_DONE",
            payload: id,
        })   
    }

    const updateHandler = () => {
        let updatedTodo = {
            name: todo,
            id,
            isDone,
        }
        setToggleUpdate(false);

        dispatch({
            type: "EDIT_TODO",
            payload: {
                id,
                updatedTodo
            }
        })
    }

    return (
        <li className="todo__list-item">    
            {toggleUpdate ? (
                <div>
                    <input type="text" value={todo} onChange={e => setTodo(e.target.value)} placeholder={name}/>
                    <button onClick={updateHandler}>Update</button>
                </div>
            ) : (
                <>
                    <span className={`todo__name ${isDone ? "is-done" : '' }`}>{name}</span>
                    <button onClick={() => setToggleUpdate(!toggleUpdate)}>{!toggleUpdate ? "Update todo" : "Don't update the todo"}</button>
                </>
            )}
            <div className="todo__button-group">
                <button onClick={removeHandler}>Remove</button>
                <button onClick={doneHandler}>{isDone ? "Unmark as undone" : "Mark as done"}</button>
            </div>
        </li>
    )
}

export default TodoItem
