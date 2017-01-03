/**
 * Created by yangbo on 17/1/2.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
    entry:['./client/index.js'],
    output:{
        path:path.join(__dirname, '/public/'),
        // publicPath:'./',
        // filename:'js/bundle.min.[hash:20].js'
        filename:'js/bundle.min.js',
        // publicPath: '/static/'
    },
    module:{
        loaders:[{
            test:/\.js/,
            exclude:/node_modules/,
            loader:'babel-loader',
            query:{
                presets:['react', 'es2015']
            }
        },{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        },{
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }]
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin("common.js"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        //最小化
        new webpack.optimize.OccurenceOrderPlugin(),
        //去重
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({
            template:'template/index.html',
            inject: 'body',
            hash:true,
            minify:{    //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:true    //删除空白符与换行符
            }
        }),
        //生产带版本号记录的js
        // new AssetsPlugin({
        //     filename: 'dist/webpack.assets.js',
        //     processOutput: function (assets) {
        //         return 'window.WEBPACK_ASSETS = ' + JSON.stringify(assets);
        //     }
        // })
    ]
};

if (process.env.NODE_ENV === 'production') {

    module.exports.plugins = (module.exports.plugins || []).concat([
        //压缩js
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
    ])
}else{
    module.exports.devtool = 'cheap-module-source-map';
    module.exports.entry = (module.exports.entry || []).concat([
        'webpack-hot-middleware/client?reload=true'
    ])
}




