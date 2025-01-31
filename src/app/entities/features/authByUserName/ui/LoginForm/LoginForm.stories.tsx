import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/authByUsername/LoginForm', // Fixed path structure
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
