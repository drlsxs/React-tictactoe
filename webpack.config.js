const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 创建插件实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'), //源文件
    filename: 'index.html' //生成内存中首页的页面


})



module.exports = {
    mode: 'development',
    // 修改默认入口文件和生成文件
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        htmlPlugin
    ],
    // 所有第三方模块匹配规则
    // webpack只能打包处理.js像.png .Vue是无法主动处理的
    module: {
        rules: [{
            test: /\.js|jsx$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },{
            test: /\.css$/,
            use: [
                {
                    loader: "style-loader"
                },{
                   loader:"css-loader"
                }
            ]
        }, //打包处理scss文件的loader    
    
    
    ]
    }
}