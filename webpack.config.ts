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

    // Додаємо src до resolve modules
    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');

    // Модифікуємо правила для SVG
    if (config.module?.rules) {
        config.module.rules = config.module.rules.map((rule: RuleSetRule | '...') => {
            if (rule !== '...' && rule.test && /svg/.test(String(rule.test))) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
    }

    // Додаємо обробку SVG
    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    // Додаємо CSS loader
    config.module?.rules?.push(buildCssLoader(true));

    // Додаємо DefinePlugin
    config.plugins = config.plugins || [];
    config.plugins.push(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
    }));

    return config;
};
