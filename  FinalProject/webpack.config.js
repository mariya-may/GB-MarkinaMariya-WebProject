const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');   // плагин для работы с html

module.exports = {
    entry: resolve(__dirname,'src/js','main.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js',
        clean: true,    // опция для удаления старых версий
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader','css-loader','sass-loader'  
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'img-optimize-loader',
                        options: {
                            compress:{
                                mode: 'high',
                                webp: true,
                                gifsicle: true,
                                disableOnDevelopment: false,
                            },
                        },
                    }, 
                ],
            },
            {
                test: /\.(mp[3|4])$/i,   // правило для аудио и видео 
                use: [
                    'file-loader',  
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: resolve(__dirname, 'src', 'index.html')}),
    ],
}
