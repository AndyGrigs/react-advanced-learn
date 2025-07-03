import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { createStoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    decorators: [
        createStoreDecorator({
            loginForm: { 
                username: 'testuser', 
                password: '123456', 
                isLoading: false 
            },
        }),
    ],
};

export const WithError: Story = {
    decorators: [
        createStoreDecorator({
            loginForm: { 
                username: 'testuser', 
                password: '123456', 
                isLoading: false,
                error: 'Неправильний логін або пароль'
            },
        }),
    ],
};

export const Loading: Story = {
    decorators: [
        createStoreDecorator({
            loginForm: { 
                username: 'testuser', 
                password: '123456', 
                isLoading: true 
            },
        }),
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        createStoreDecorator({
            loginForm: { 
                username: 'testuser', 
                password: '123456', 
                isLoading: false 
            },
        }),
    ],
};
