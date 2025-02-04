import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';
// Тут твій кастомний провайдер, який імпортує { Provider, store }

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
};
export default meta;

type Story = StoryObj<typeof MainPage>;

export const Normal: Story = {
    args: {},
    decorators: [
        (StoryComponent) => (
            <StoreProvider>
                <StoryComponent />
            </StoreProvider>
        ),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        (StoryComponent) => (
            <StoreProvider>
                <StoryComponent />
            </StoreProvider>
        ),
        ThemeDecorator(Theme.DARK),
    ],
};
