import { useReducer } from 'react';

import useLocalStorage from './useLocalStorage';

const { getItemsFromLocalStorage, addItem, removeItem, editItem } = useLocalStorage("todos")

const initialState = getItemsFromLocalStorage();

const todoReducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case "ADD_TODO":
            addItem(payload);
            state = [...state, payload];
            return state;
        case "REMOVE_TODO":
            removeItem(payload);
            return state.filter(item => item.id !== payload);
        case "TOGGLE_DONE":
            let updatedState = state.map(todo => (
                todo.id === payload ? {...todo, isDone: !todo.isDone} : todo
                ));
            editItem(updatedState);
            return updatedState;
        case "EDIT_TODO": {
            let updatedState = state.map(todo => (
                todo.id === payload.id ? payload.updatedTodo : todo
                ));
            editItem(updatedState);
            return updatedState;
        }
        default:
            return state;
    }
};

const useTodo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    
    return {
        state, 
        dispatch,
    }
}

export default useTodo;
