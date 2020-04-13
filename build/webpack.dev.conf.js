const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf.js')


module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        filename: 'bound.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // 处理css/scss/sass
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: (loader) => [
                                require('autoprefixer')({
                                    browsers: [
                                        'last 10 Chrome versions',
                                        'last 5 Firefox versions',
                                        'Safari >= 6',
                                        'ie > 8'
                                    ]
                                })
                            ]
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    }
})
