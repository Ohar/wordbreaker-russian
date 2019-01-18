const path               = require('path')
const BrowserSyncPlugin  = require('browser-sync-webpack-plugin')
const ExtractTextPlugin  = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin     = require('uglifyjs-webpack-plugin')
const escape             = require('lodash/escape')

const {author, name: title, description, homepage, version} = require('./package.json')

const PROD = Boolean(JSON.parse(process.env.PROD_ENV || '0'))

const year = new Date().getFullYear()

const plugins = {
    common: [
        new CleanWebpackPlugin(['docs']),
        new UglifyJsPlugin(
            {
                comments: !PROD,
                beautify: !PROD,
            }
        ),
        new ExtractTextPlugin('[name].css'),
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
    ],
}

module.exports = {
    entry  : {
        'wordbreaker-russian': [
            'babel-polyfill',
            path.resolve(__dirname, 'src/wordbreaker-russian/index.js'),
        ],
        demo: [
            'babel-polyfill',
            path.resolve(__dirname, 'src/demo/index.jsx'),
            path.resolve(__dirname, 'src/demo/index.ejs'),
        ],
    },
    output : {
        pathinfo  : true,
        path      : path.resolve(__dirname, 'docs'),
        publicPath: './',
        filename  : '[name].bundle.js',
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
            {
                test: /\.ejs$/,
                use : [
                    {
                        loader : 'file-loader',
                        options: {
                            name      : '[name].html',
                            context   : './',
                            outputPath: './',
                        },
                    },
                    {
                        loader: 'extract-loader',
                    },
                    {
                        loader: 'ejs-webpack-loader',
                        options: {
                            data: {
                                author: escape(author),
                                description,
                                homepage,
                                title,
                                version,
                                year,
                            },
                            htmlmin: true,
                        },
                    },
                ],
            },
        ],
    },
    node   : {
        fs: 'empty',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias     : {
            root: path.join(__dirname, '/src'),
            demo: path.join(__dirname, '/src/demo'),
        },
    },
}
