var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        //loaders加载器
        loaders: [{
                test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader' //loader的名称（必须）
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|PNG|jpg|JPG|jpeg|JPEG|gif|GIF)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },

            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            }, //配置bootstrap
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?prefix=font/&limit=5000"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    devServer: {
        // contentBase: './build', //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        // colors: true, //在cmd终端中输出彩色日志
        // historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        // inline: true, //设置为true，当源文件改变时会自动刷新页面
        port: 82, //设置默认监听端口，如果省略，默认为"8080"
        // process: true, //显示合并代码进度
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/build/index.html'
        }),
    ],


};