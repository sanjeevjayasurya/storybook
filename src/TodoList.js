// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import './index.css'; // Import the global styles

/**
 * A component that displays a list of todo items.
 *
 * @param {Object} props
 * @param {Array} props.todos - The list of todo items.
 * @param {Function} props.onToggleCompleted - A callback to toggle the completed state of a todo item.
 */
function TodoList({ todos, onToggleCompleted }) {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleCompleted={onToggleCompleted}
                />
            ))}
        </ul>
    );
}

export default TodoList;