// NotFoundPage.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';

// 1. Оголошуємо метадані сторі
const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,

};
export default meta;

// 2. Створюємо тип для історій
type Story = StoryObj<typeof NotFoundPage>;

// 3. Оголошуємо історії як об’єкти
export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
