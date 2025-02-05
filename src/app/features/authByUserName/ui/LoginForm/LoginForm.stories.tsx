import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm', // Fixed path structure
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => (
    <StoreProvider>
        <LoginForm {...args} />
    </StoreProvider>
);

export const Primary = Template.bind({});
Primary.args = {};
