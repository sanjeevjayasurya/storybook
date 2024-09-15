import React from "react";
import TodoForm from "./TodoForm";
import { userEvent } from "@storybook/test";

export default {
  title: "TodoForm",
  component: TodoForm,
};

const Template = (args) => <TodoForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onAddTodo: () => console.log("Todo added"),
};

export const WithInitialText = Template.bind({});
WithInitialText.args = {
  onAddTodo: () => console.log("Todo added"),
  text: "Initial text",
};

export const UpdatedText = Template.bind({});
UpdatedText.args = {
  onAddTodo: () => console.log("Todo added"),
};

UpdatedText.play = async ({ args }) => {
  const input = document.querySelector("input");
  const button = document.querySelector("button");
  await userEvent.type(input, "New Todo");
  await userEvent.click(button);
};
