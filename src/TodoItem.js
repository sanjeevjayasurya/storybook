// TodoItem.js
import React from 'react';
import './index.css'; // Import the global styles

/**
 * A component that represents a single todo item.
 *
 * @param {Object} props
 * @param {Object} props.todo - The todo item.
 * @param {Function} props.onToggleCompleted - A callback to toggle the completed state of the todo item.
 */
function TodoItem({ todo, onToggleCompleted }) {
    const handleToggleCompleted = () => {
        onToggleCompleted(todo.id);
    };

    return (
        <li className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggleCompleted}
            />
            <span className={todo.completed ? 'completed' : ''}>
                {todo.text}
            </span>
        </li>
    );
}

export default TodoItem;