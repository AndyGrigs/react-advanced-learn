module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-webpack5-compiler-babel',
        '@chromatic-com/storybook'
    ],

    framework: {
        name: "@storybook/react-webpack5",
        options: {
            builder: {
                useSWC: true,
            }
        }
    },

    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },

    webpackFinal: async (config) => {
        // Додаємо підтримку абсолютних імпортів
        config.resolve.modules = [
            ...(config.resolve.modules || []),
            path.resolve(__dirname, '..', '..', 'src'),
        ];

        // Додаємо розширення файлів
        config.resolve.extensions = [
            ...(config.resolve.extensions || []),
            '.ts',
            '.tsx'
        ];

        return config;
    },

    docs: {
        autodocs: 'tag',
    },

    features: {
        storyStoreV7: true,
    }
};
