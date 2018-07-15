const environment = process.env.NODE_ENV.trim();
import * as path from 'path';
import { Configuration, ExternalsObjectElement, NamedModulesPlugin, IgnorePlugin, ProvidePlugin, DefinePlugin } from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config: Configuration = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist')
    },
    devtool:'inline-source-map',
    target: 'web',
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "source-map-loader"
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'stage-0'],
                            compact: false
                        }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        new DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NOVE_ENV)
            }
        }),
        new IgnorePlugin(/^\.\/locale/, /moment/),
        new HtmlWebpackPlugin({
            title: "Template Test"
        })
    ]
}

export default config;