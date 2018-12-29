const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const env = process.env.NODE_ENV || 'production';
console.log('>> Building ver.: ' + env);

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            '@babel/polyfill',
            './src/index.js',
            // 'webpack-dev-server/client?http://localhost:5000',
            // 'webpack/hot/only-dev-server'
        ]
    },
    output: {
        path: __dirname + '/dist',
        //publicPath: '/timeobserver/',
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            '@src': path.resolve('./src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(ttf|eot|svg|gif|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.[jt]sx?$/,
                include: [
                    path.join(__dirname, 'src')
                ],
                loader: 'ts-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/index.html' }
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 5000,
        // redirect 404s to index
        historyApiFallback: {
            index: '/timeobserver/'
        },
        proxy: {
        }
    },
};
