const path               = require('path'),
      BrowserSyncPlugin  = require('browser-sync-webpack-plugin'),
      ExtractTextPlugin  = require('extract-text-webpack-plugin'),
      HtmlWebpackPlugin  = require('html-webpack-plugin'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      UglifyJsPlugin     = require('uglifyjs-webpack-plugin')

const PROD = Boolean(JSON.parse(process.env.PROD_ENV || '0'));

module.exports = {
    entry  : {
        'wordbreaker-russian': [
            'babel-polyfill',
            path.resolve(__dirname, 'src/wordwrapper-russian/index.js')
        ],
        demo                 : [
            'babel-polyfill',
            path.resolve(__dirname, 'src/demo/index.jsx')
        ],
    },
    output : {
        pathinfo  : true,
        path      : path.resolve(__dirname, 'docs'),
        publicPath: './',
        filename  : PROD
            ? '[name].min.bundle.js'
            : '[name].bundle.js',
    },
    watch  : true,
    plugins: [
        new UglifyJsPlugin(
            {
                compress: PROD,
                comments: !PROD,
                beautify: !PROD,
            }
        ),
        new CleanWebpackPlugin(['docs']),
        new HtmlWebpackPlugin(
            {
                template: 'src/demo/index.ejs',
            }
        ),
        new ExtractTextPlugin('[name].css'),
        new BrowserSyncPlugin(
            {
                host  : process.env.IP || 'localhost',
                port  : process.env.PORT || 3000,
                open  : false,
                server: {
                    baseDir: ['./docs']
                }
            }
        ),
    ],
    module : {
        rules: [
            {
                test   : /\.jsx?$/,
                loader : 'babel-loader',
                include: path.join(__dirname, 'src')
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
        ]
    },
    node   : {
        fs: 'empty'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};