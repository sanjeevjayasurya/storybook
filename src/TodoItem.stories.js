import { expect } from '@storybook/jest';
// TodoItem.stories.js
import React from 'react';
import TodoItem from './TodoItem';
import { userEvent, within } from '@storybook/test';

export default {
  title: 'TodoItem',
  component: TodoItem,
};

const Template = (args) => <TodoItem {...args} />;

export const CompletedTodoItem = Template.bind({});
CompletedTodoItem.args = {
  todo: {
    id: 1,
    text: 'Buy milk',
    completed: true,
  },
  onToggleCompleted: () => console.log('Toggle completed'),
};

export const IncompleteTodoItem = Template.bind({});
IncompleteTodoItem.args = {
  todo: {
    id: 2,
    text: 'Walk the dog',
    completed: false,
  },
  onToggleCompleted: () => console.log('Toggle completed'),
};

export const LongTextTodoItem = Template.bind({});
LongTextTodoItem.args = {
  todo: {
    id: 3,
    text: 'This is a very long todo item that should wrap to multiple lines',
    completed: false,
  },
  onToggleCompleted: () => console.log('Toggle completed'),
};