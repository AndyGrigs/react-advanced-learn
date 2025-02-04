// import React from 'react';
// import { Meta, StoryObj, StoryFn } from '@storybook/react';

// import { Theme } from 'app/providers/ThemeProvider';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Modal } from './Modal';

// export default {
//     title: 'shared/Modal',
//     component: Modal,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as Meta<typeof Modal>;

// const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

// 1. Описуємо базові метадані сторі
const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    // Якщо хочеш увімкнути Autodocs (документацію) Storybook 7:
    // tags: ['autodocs'],

    argTypes: {},
};
export default meta;

// 2. Створюємо тип для сторі
type Story = StoryObj<typeof Modal>;

// 3. Оголошуємо окремі історії, де ключем є назва сторі,
// а значенням - об'єкт з налаштуваннями

// ========== 1) Primary ==========
export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'lorem ipsum dolor sit amet consectetu',
    },
};

// ========== 2) Dark ==========
export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'lorem ipsum dolor sit amet consectetu',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
