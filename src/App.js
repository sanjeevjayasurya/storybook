// TodoApp.js
import React, { useState, useEffect } from "react";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import "./index.css"; // Import the global styles

/**
 * The main application component.
 */
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch todos from API or local storage
    const fetchTodos = async () => {
      setLoading(true);
      // Simulating API call
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, text: "Buy milk", completed: false },
            { id: 2, text: "Walk the dog", completed: true },
          ]);
        }, 1000);
      });
      setTodos(data);
      setLoading(false);
    };
    fetchTodos();
  }, []);

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleToggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <TodoForm onAddTodo={handleAddTodo} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todos={todos} onToggleCompleted={handleToggleCompleted} />
      )}
    </div>
  );
}

export default TodoApp;
