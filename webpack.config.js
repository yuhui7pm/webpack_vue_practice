const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry:path.join(__dirname,'src/index.js'),
  output:{
    filename:"bundle.js",
    path:path.join(__dirname,'dist'),
  },
  plugins: [
      //这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。
      //例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
      new VueLoaderPlugin()
  ],
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
      {
        test:/\.styl$/,
        use:[
          "style-loader",
          "css-loader",
          "stylus-loader"
        ]
      }
    ]
  }
}