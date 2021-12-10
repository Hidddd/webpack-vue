const Webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
module.exports = WebpackMerge(webpackConfig,{
  mode:'development',
  devtool:'cheap-module-eval-source-map',
  // module:{
  //   rules:[
  //       {
  //           test:/\.css$/,
  //           use:['style-loader','css-loader']
  //       }
  //   ]
  // },
  devServer:{
    port:5000,
    host: '192.168.1.40',
    hot:true,
    contentBase:'../dist'
  },
  plugins:[
    new Webpack.HotModuleReplacementPlugin(),
  ]
})
