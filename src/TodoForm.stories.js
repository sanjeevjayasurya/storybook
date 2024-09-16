import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { userEvent, canvasElement } from "@storybook/test";

export default {
  title: "TodoForm",
  component: TodoForm,
};

const Template = (args) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy milk", completed: false },
    { id: 2, text: "Walk the dog", completed: true },
  ]);
  const handleAddTodo = (text) => {
    setTodos((prevTodos) => [...prevTodos, {...text}]);
  };

  return (
    <div>
      <TodoForm onAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const UpdatedText = Template.bind({});

UpdatedText.play = async ({ canvasElement }) => {
  const input = canvasElement.querySelector("input");
  const button = canvasElement.querySelector("button");
  await userEvent.type(input, "New Todo");
  await userEvent.click(button);
};

export const UpdatedMultipleText = Template.bind({});

UpdatedMultipleText.play = async ({ canvasElement }) => {
  const input = canvasElement.querySelector("input");
  const button = canvasElement.querySelector("button");
  await userEvent.type(input, "New Todo");
  await userEvent.click(button);
  await userEvent.type(input, "Another Todo");
  await userEvent.click(button);
};