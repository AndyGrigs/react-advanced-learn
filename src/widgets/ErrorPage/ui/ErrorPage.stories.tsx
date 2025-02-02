// ErrorPage.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ErrorPage } from './ErrorPage';

// 1. Створюємо meta-об’єкт, який описує історію
const meta: Meta<typeof ErrorPage> = {
    title: 'widget/ErrorPage',
    component: ErrorPage,
};
export default meta;

// 2. Оголошуємо тип для історій
type Story = StoryObj<typeof ErrorPage>;

// 3. Описуємо кожну історію як об’єкт
export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
