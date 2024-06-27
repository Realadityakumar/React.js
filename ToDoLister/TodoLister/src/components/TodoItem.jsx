import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

// This is a functional component that represents a single todo item.
// It takes in a todo object as a prop and renders the todo item UI.
function TodoItem({ todo }) {
  // State hooks for managing the editable state and the todo message.
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)

  // Destructure the functions from the useTodo hook for updating, deleting, and toggling the todo.
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  // Function for editing the todo.
  const editTodo = () => {
    // Update the todo with the new message.
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    // Set the editable state to false.
    setIsTodoEditable(false)
  }

  // Function for toggling the completed state of the todo.
  const toggleCompleted = () => {
    // Call the toggleComplete function with the todo id.
    toggleComplete(todo.id)
  }

  return (
    // The todo item UI is a div with some CSS classes.
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        // The background color of the todo item is determined by the completed state.
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      {/* Checkbox for marking the todo as completed. */}
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      {/* Text input for editing the todo message. */}
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          // The border color of the input is determined by the editable state.
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        // Set the todo message state when the input value changes.
        onChange={(e) => setTodoMsg(e.target.value)}
        // Disable the input when the todo is not editable.
        readOnly={!isTodoEditable}
      />
      {/* Edit and save button. */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          // If the todo is completed, do nothing.
          if (todo.completed) return

          // If the todo is editable, call the editTodo function.
          // Otherwise, toggle the editable state.
          if (isTodoEditable) {
            editTodo()
          } else {
            setIsTodoEditable((prev) => !prev)
          }
        }}
        // Disable the button when the todo is completed.
        disabled={todo.completed}
      >
        {/* Show the save icon when the todo is editable, otherwise show the edit icon. */}
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete todo button. */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        // Call the deleteTodo function with the todo id when the button is clicked.
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem;