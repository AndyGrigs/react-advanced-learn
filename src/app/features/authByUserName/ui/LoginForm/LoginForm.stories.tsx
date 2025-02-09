import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm', // Fixed path structure
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <StoreDecorator initialState={{
                loginForm: { username: 'testuser', password: '123456', isLoading: false },
            }}
            >
                <Story />
            </StoreDecorator>
        ),
    ],
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
