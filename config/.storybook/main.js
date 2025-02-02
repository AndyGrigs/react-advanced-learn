module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-webpack5-compiler-babel',
        '@chromatic-com/storybook',
        'storybook-addon-playwright'
    ],

    framework: {
        name: "@storybook/react-webpack5",
        options: {}
    },

    testRunner: {
        preset: 'playwright'
      },

    docs: {},

    typescript: {
        reactDocgen: 'react-docgen-typescript'
    }
};
