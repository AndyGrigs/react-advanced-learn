// Loader.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

// 1. Опис метаданих для Storybook
const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    // Аргумент, який керує відображенням колірного пікера (необов'язково)
    //   argTypes: {
    //     backgroundColor: { control: 'color' },
    //   },
    // Початкові аргументи, якщо компонент справді приймає проп `to` (інакше видали)
    // args: {
    //     to: '/',
    // },
};
export default meta;

// 2. Тип для історій
type Story = StoryObj<typeof Loader>;

// 3. Створюємо історії через об'єкти

export const Normal: Story = {
    // Якщо не передаєш ніяких особливих аргументів — можна взагалі не оголошувати args
    args: {},
};

export const Dark: Story = {
    args: {},
    // Декоратор застосує темну тему лише до цієї історії
    decorators: [ThemeDecorator(Theme.DARK)],
};
