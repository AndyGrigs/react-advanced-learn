import { Theme } from '../../src/app/providers/ThemeProvider';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import 'regenerator-runtime/runtime'; 


export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    // Order matters - last decorator wraps everything
    (Story) => StyleDecorator(Story),
    (Story) => ThemeDecorator(Theme.LIGHT)(Story),
    (Story) => RouterDecorator(Story),
    (Story) => StoreDecorator(Story),
];

export const tags = ['autodocs'];
