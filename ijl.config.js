const pkg = require('./package')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    apiPath: "stubs/api",
    webpackConfig: {
        output: {
            publicPath: `/static/repos/${pkg.version}/`
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                modules: {mode: 'local',
                                    exportGlobals: true,
                                    localIdentName: isProd ?
                                        '[hash:base64]'
                                        : '[path]--[name]__[local]--[hash:base64:3]',
                                    localIdentContext: path.resolve(__dirname, 'src'),
                                },
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            "postcss-preset-env",
                                            {
                                                // Options
                                            },
                                        ],
                                    ],
                                },
                            },
                        },
                    ],
                },
            ],
        },
    },
}
