import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

// This is a functional component that renders a form for adding todos.
// It uses React hooks to manage state.
function TodoForm() {
    // Set up state for the input field using the useState hook
    const [todo, setTodo] = useState("")

    // Get the addTodo function from the TodoContext using the useTodo hook
    const {addTodo} = useTodo()

    // Define an event handler for form submission. Prevents the default form submission behavior,
    // checks if the input field is empty, and adds the todo to the list if it's not empty.
    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      // Call the addTodo function from the TodoContext with the new todo and a completed flag set to false.
      addTodo({ todo, completed: false})

      // Reset the input field to an empty string.
      setTodo("")
    }

  return (
      // Render a form element with an onSubmit event handler set to the add function.
      <form onSubmit={add}  className="flex">

          // Render an input element for the todo text.
          // The value of the input is set to the todo state variable, and the onChange event handler
          // updates the todo state variable when the input changes.
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />

          // Render a button element for submitting the form.
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;