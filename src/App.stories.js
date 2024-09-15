import React from 'react';
import App from './App';

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

export const Primary = Template.bind({});
Primary.args = {
  loading: false,
  error: null,
  data: null,
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  loading: true,
  error: null,
  data: null,
};

export const WithData = Template.bind({});
WithData.args = {
  loading: false,
  error: null,
  data: {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
};

export const WithLoadingAndData = Template.bind({});
WithLoadingAndData.args = {
  loading: true,
  error: null,
  data: {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
};
