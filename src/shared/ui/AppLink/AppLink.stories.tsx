// AppLink.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

// 1. Створюємо Meta-об’єкт
const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    // Якщо твій компонент справді чекає `to`, можеш вказати це як стартове значення
    args: {
        to: '/',
    },
};
export default meta;

// 2. Створюємо тип для історій
type Story = StoryObj<typeof AppLink>;

// 3. Описуємо історії в об’єктному форматі StoryObj
export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const Red: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
