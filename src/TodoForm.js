// TodoForm.js
import React, { useState } from 'react';
import './index.css'; // Import the global styles

/**
 * A component that allows users to add new todo items.
 *
 * @param {Object} props
 * @param {Function} props.onAddTodo - A callback to add a new todo item.
 */
function TodoForm({ onAddTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddTodo({ id: Date.now(), text, completed: false });
        setText('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="Add new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;