import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

// This is the main App component where we define our state and functions and provide them to the children components using the Context API
function App() {
  // Define the state for todos using the useState hook
  const [todos, setTodos] = useState([])

  // Define the function to add a new todo
  const addTodo = (todo) => {
    // Add a new todo to the beginning of the todos array
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  // Define the function to update a todo
  const updateTodo = (id, todo) => {
    // Search for the todo with the given id and update it with the new data
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  // Define the function to delete a todo
  const deleteTodo = (id) => {
    // Filter out the todo with the given id from the todos array
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // Define the function to toggle the completion status of a todo
  const toggleComplete = (id) => {
    // Search for the todo with the given id and toggle its completion status
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  // When the component mounts, load the todos from local storage if they exist
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"))

    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos)
    }
  }, [])

  // When the todos change, save them to local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  // Render the App component with the todos and functions provided to the TodoProvider
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    {/* Heading for the app */}
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    {/* Todo form goes here */} 
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    {/* Loop and Add TodoItem here */}
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App