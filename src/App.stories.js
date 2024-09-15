import React from 'react';
import App from './App';
import { userEvent } from '@storybook/test';

export default {
  title: 'App',
  component: App,
  argTypes: {
    loading: { control: 'boolean' },
    error: { control: 'text' },
    data: { control: 'object' },
  },
} 

const Template = (args) => <App {...args} />;

export const WithUserInput = Template.bind({});
WithUserInput.play = async ({ canvasElement }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const input = canvasElement.querySelector('input');
  await userEvent.type(input, 'Buy milk');
  await userEvent.click(canvasElement.querySelector('button'));
};

export const WithMultipleUserInputs = Template.bind({});
WithMultipleUserInputs.play = async ({ canvasElement }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const input1 = canvasElement.querySelector('input');
  await userEvent.type(input1, 'Buy milk');
  await userEvent.click(canvasElement.querySelector('button'));
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await userEvent.type(input1, 'Buy eggs');
  await userEvent.click(canvasElement.querySelector('button'));
};