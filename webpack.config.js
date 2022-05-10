const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

//оптимизация сборки, в случае если режим продакшна, тогда все файлы минифицируются
const optimization = () =>{
    const config = {
         splitChunks:{
            chunks: 'all'
        }
    }

    if(!isDev){
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config
}
//функция для введения различий между именами файлов для разработки и для продакшна
const fileName = (ext) => isDev? `[name].${ext}` : `[name].[hash].${ext}`

//оптимизация для загрузчиков стилей
const cssLoaders = additionLoader => {
    const loaders = [{
        loader: MiniCssExtractPlugin.loader,
        options: {
        }
    } ,'css-loader']

    if(additionLoader){
        loaders.push(additionLoader)
    }

    return loaders
}

const babelOptions = (additionalPreset) => {
    const opts = {
        presets: [
            '@babel/preset-env'
        ]
    }

    if(additionalPreset){
        opts.presets.push(additionalPreset)
    }
    return opts
}

module.exports = {
    //место откуда берутся все файлы для сборки
    context: path.resolve(__dirname, 'src'),
    //мод сборки по умолчанию
    mode: 'development',
    //точки входа в проект, куда импортируются все остальные файлы
    entry: {
        main:['@babel/polyfill', './index.jsx'],
        analytics: './analytics.ts'
    },
    //файлы куда собирается проект
    output: {
        filename: fileName('js'),
        path: path.resolve(__dirname, 'dist')
    },
    //расширения по умолчанию, чтобы их не указывать при импортах
    resolve: {
        extensions: ['.js', '.json', '.png', '.csv', '.xml', '.css'],
        //упрощает указание относительных путей
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src'),
        }
    },
    //при импорте библиотеки jquery в несколько точек входа она выносится за пределы, и импортируется однажды
    optimization: optimization(),
    //для запуска сервера, чтобы всё автоматом обновлялось
    devServer: {
        port: 4200,
        //для изменения элементов без перезагрузки страницы
        hot: isDev
    },
    //подключение плагинов
    plugins: [
        //плагин для автоматического подключения бандлов в верстку
        new HTMLWebpackPlugin({
            title: 'WebPack',
            //указан базовый шаблон
            template: './index.html',
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        //плагин для очистки папки dist, куда всё собирается
        new CleanWebpackPlugin(),
        //перенос элементов из рабочей папки в папку сбора
        new CopyWebpackPlugin({
            patterns: [
              { from: path.resolve(__dirname, 'src/favicon.png'),
                to: path.resolve(__dirname, 'dist')
              },
            ],
          }),
          //собирает все файлы css в один бандл
        new MiniCssExtractPlugin({
            filename: fileName('css')
        })
    ],
    module: {
        //загрузчики разных типов файлов, для работы со стилями, картинками и т.д.
        rules: [
            {
                test: /\.css$/,
                use:cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions()
                } 
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-typescript')
                } 
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react')
                } 
            },
        ]
    }
}