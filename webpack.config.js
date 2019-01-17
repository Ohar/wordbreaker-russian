const path               = require('path')
const BrowserSyncPlugin  = require('browser-sync-webpack-plugin')
const ExtractTextPlugin  = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin     = require('uglifyjs-webpack-plugin')

const PROD = Boolean(JSON.parse(process.env.PROD_ENV || '0'))

const plugins = {
    common: [
        new CleanWebpackPlugin(['docs']),
        new UglifyJsPlugin(
            {
                comments: !PROD,
                beautify: !PROD,
            }
        ),
    ],
    dev: [
        new BrowserSyncPlugin(
            {
                host  : process.env.IP || 'localhost',
                port  : process.env.PORT || 3000,
                open  : false,
                server: {
                    baseDir: ['./docs'],
                },
            }
        ),

    ],
    prod: [
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin(
            {
                template: 'src/demo/index.ejs',
            }
        ),
    ],
}

module.exports = {
    entry  : {
        'wordbreaker-russian': [
            'babel-polyfill',
            path.resolve(__dirname, 'src/wordbreaker-russian/index.js'),
        ],
        ...(
            PROD
                ? {
                demo: [
                    'babel-polyfill',
                    path.resolve(__dirname, 'src/demo/index.jsx'),
                ],
            }
            : {}
        ),
    },
    output : {
        pathinfo  : true,
        path      : path.resolve(__dirname, 'docs'),
        publicPath: './',
        filename  : PROD
            ? '[name].min.bundle.js'
            : '[name].bundle.js',
    },
    watch  : !PROD,
    plugins: plugins.common.concat(
        PROD
            ? plugins.prod
            : plugins.dev
    ),
    module : {
        rules: [
            {
                test   : /\.jsx?$/,
                loader : 'babel-loader',
                include: path.join(__dirname, 'src'),
            },
            {
                test: /\.(less|css)$/,
                use : ExtractTextPlugin.extract(
                    {
                        use: [
                            'css-loader',
                            'postcss-loader',
                            'less-loader',
                        ],
                    }
                ),
            },
        ],
    },
    node   : {
        fs: 'empty',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}
