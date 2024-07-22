import React from 'react'
import { createContext, useState } from 'react'
export const todoContext= createContext({
    todos:[
        {
            id:1,
            todo: "todo msg",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete: (id)=>{},

});
export const useTodo=()=>{
    return React.useContext(todoContext)
}
export const TodoProvider= todoContext.Provider;