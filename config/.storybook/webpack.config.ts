import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack',  '@babel/plugin-transform-runtime', 'file-loader'],
    });

    // config.module?.rules?.push({
    //     test: /\.(ts|tsx|js|jsx)$/,
    //     exclude: /node_modules/,
    //     use: {
    //         loader: 'babel-loader',
    //         options: {
    //             presets: [
    //                 '@babel/preset-env',
    //                 '@babel/preset-react',
    //                 '@babel/preset-typescript',
    //             ],
    //             plugins: [
    //                 '@babel/plugin-transform-runtime', // Correct placement of transform-runtime
    //             ],
    //         },
    //     },
    // });
    

    config.module?.rules?.push(buildCssLoader(true));

      // Створюємо масив плагінів, якщо його немає
    config.plugins = config.plugins || [];

    config.plugins.push(new webpack.DefinePlugin({
        __IS_DEV__: true,
    }));

    return config;
};
