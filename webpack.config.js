const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
// import webpack from "webpack";   //import是ES6的语法，加载方式是编译时运行
const webpack = require("webpack"); //require是CommonJs/AMD的语法，加载方式是运行时加载
const extractTextPlugin = require("extract-text-webpack-plugin");

const isDev = process.env.NODE_ENV==="development";
// console.log('isDev:',isDev)

const config = {
  target:'web',//webpack编译目标是web平台
  entry:path.join(__dirname,'src/index.js'),
  output:{
    filename:"bundle.[hash:8].js",
    path:path.join(__dirname,'dist'),
  },
  //webpack默认只支持js，所以对.vue文件要使用vue-loader,输出正确的js代码
  module:{
    rules:[
      {
        test:/\.vue$/,//检测文件类型
        loader:'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
            "style-loader",
            "css-loader"
          ]
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader"
      },
      {
        test:/\.(jpg|png|gif|jpeg|svg)$/,
        use:{
          //一般搭配file-loader使用
          loader:'url-loader',
          options:{
            limit:1024,//当图片小于1024kb时，就被转换成base64
            name:'[name]-pic.[ext]'
          }
        }
      },
    ]
  },
  plugins:[
    //这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。
    //例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
    new VueLoaderPlugin(),
    //webpack.DefinePlugin这个插件是用来定义全局变量的
    //最为常用的用途就是用来处理我们开发环境和生产环境的不同。
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV:isDev?'"development"':'"production"'
      }
    }),
    //为html文件中引入的外部资源如script、link
    //可以生成创建html入口文件，比如单页面可以生成一个html文件入口
    new HTMLPlugin(),
  ],
}
//如果是开发模式，就调用webpack-dev-server
if(isDev){
  config.module.rules.push(
    {
      test:/\.styl/,
      use:[
        "style-loader",
        "css-loader",
        {
          //自动添加浏览器前缀 
          loader:"postcss-loader",
          //使用stylus-loader已经生成的sourceMap
          options:{
            sourceMap:true
          }
        },
        "stylus-loader"
      ]
    }
  )
  //devtool配置的定义很简单：选择一种 source map 格式来增强调试过程，
  //不同的值会明显影响到构建build和重新构建rebuild的速度。
  //cheap-module-eval-source-map：原始源代码（仅限行）
  config.devtool = 'cheap-module-eval-source-map';
  config.devServer = {
    port:3000,
    host:'localhost',
    // 在浏览器上全屏显示编译的errors或warnings。
    overlay:{
      // warnings:true,
      errors:true,
    },
    // open 在devServer启动且第一次构建完成时，自动用我们的系统的默认浏览器去打开要开发的网页，
    open:true,
    //hot配置是否启用模块的热替换功能，devServer的默认行为是在发现源代码被变更后，
    //通过自动刷新整个页面来做到事实预览，开启hot后，
    //将在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览。
    hot:true,
  };
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(), //热加载插件
    new webpack.NoEmitOnErrorsPlugin() //启用此插件后，webpack 进程遇到错误代码将不会退出。
  )
}else{
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push(
    {
      test:/\.styl/,
      //如果是生产模式就将静态资源文件单独打包出来
      use:extractTextPlugin.extract({
/*         css-loader 的作用是处理css文件中 @import，url之类的语句，style-loader
        则是将css文件内容放在style标签内并插入head中，既然使用了extract-text-webpack-plugin，
        按理说就没必要配置style-loader了，实际上你不配置也可以，可是如果你不想分离css文件，
        可设置disable:ture来关闭该插件，这时fallback:'style-loader'就派上用场了 */
        fallback:'style-loader',
        use:[
          "css-loader",
          {
            //自动添加浏览器前缀 
            loader:"postcss-loader",
            //使用stylus-loader已经生成的sourceMap
            options:{
              sourceMap:true
            }
          },
          "stylus-loader"
        ]
      })
    }
  )
  //contenthash是针对文件内容级别的，只有你自己模块的内容变了，那么hash值才改变，
  config.plugins.push(
    new extractTextPlugin('styles.[md5:contenthash:hex:8].css') //因为webpack4.3包含了contenthash这个字段，所以不能使用contenthash，要使用md5:contenthash:hex:8来替代
  )
}

module.exports = config;