const pkg = require('./package');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    "apiPath": "stubs/api",
    webpackConfig: {
        output: {
            publicPath: `/static/${pkg.name}/${pkg.version}/`
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        {loader: 'style-loader'},
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    mode: 'local',
                                    exportGlobals: true,
                                    localIdentName: isProd ?
                                        '[hash:base64]'
                                        : '[path]--[name]__[local]--[hash:base64:3]',
                                    localIdentContext: path.resolve(__dirname, 'src'),
                                    exportLocalsConvention: "camelCase",
                                },
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        // @import "path/to/my.css";
                                        require('postcss-import'),
                                        // for () {}
                                        require('postcss-for'),
                                        // TODO: устарело
                                        require('postcss-simple-vars'),
                                        // :root { --my-var: 0 } ... div { padding: var(--my-var) }
                                        require('postcss-custom-properties')({
                                            // Не оставлять переменную
                                            preserve: false
                                        }),
                                        // @custom-media --media (min-width: 1281px) ... @media (--media-xl) {}
                                        require('postcss-custom-media')({
                                            // Не оставлять переменную
                                            preserve: false
                                        }),
                                        // div { div {} }
                                        require('postcss-nested'),
                                        // color(#fff a(90%));
                                        require('postcss-color-function'),
                                        // Лучшее не нуждается в комментариях
                                        require('autoprefixer')(),
                                        // calc(2 * 50px) -> 100px
                                        require('postcss-calc'),
                                        // Удаляем колмментарии из CSS
                                        require('postcss-discard-comments'),
                                        // Минификация css (удаление пустых :root {}, отступов, переносов строк и т.д.)
                                        require('cssnano')({
                                            preset: 'default'
                                        })
                                    ]
                                },
                            },
                        },
                    ],
                },
            ],
        },
    },
    navigations: {
        'repos':'/repos',
        'link.repos.basket':'/basket',
        'link.repos.home':'/home',
        'link.repos.showcase_dress':'/showcase_dress',
        'link.repos.home_man':'/home_man',
        'link.repos.showcase_tshirts_women':'/showcase_tshirts_women',
        'link.repos.showcase_jackets_women':'/showcase_jackets_women',
        'link.repos.showcase_shirts_women':'/showcase_shirts_women',
        'link.repos.showcase_hoodies_women':'/showcase_hoodies_women',
        'link.repos.showcase_jeans_women':'/showcase_jeans_women',
        'link.repos.showcase_skirts':'/showcase_skirts',
        'link.repos.showcase_accessories':'/showcase_accessories',
        'link.repos.showcase_jackets_men':'/showcase_jackets_men',
        'link.repos.showcase_shirts_men':'/showcase_shirts_men'
    }
}
