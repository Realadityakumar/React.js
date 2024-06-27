import { createContext,useContext } from "react";
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Msg",
            completed: false,

        }
    ],
    addTodo: (todo) => {},
    updateToDo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});
/* 
    This is a custom hook that allows us to access the values and functions provided by the TodoContext.
    It uses the useContext hook from React to retrieve the context value.
    The useContext hook takes a context object as an argument and returns the current context value.
    We can then use the returned context value to access the values and functions provided by the TodoContext.
*/
export const useTodo = () => {
    // Call the useContext hook and pass in the TodoContext object as an argument.
    // This will return the current context value.
    // The context value is an object that contains the todos array, the addTodo function, the updateTodo function,
    // the deleteTodo function, and the toggleComplete function.
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider