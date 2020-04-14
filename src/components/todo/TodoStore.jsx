import React from 'react'

import useTodo from "./useTodo"

export const TodoContext = React.createContext();

const TodoStore = ({children}) => {
    const {state, dispatch} = useTodo();

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoStore;
