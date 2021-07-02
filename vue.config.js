/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-02 10:43:34
 * @LastEditTime: 2021-07-02 14:01:55
 */
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  runtimeCompiler: true,
  // publicPath: '/',
  productionSourceMap: true,
  // webpack的相关配置
  configureWebpack: {
    entry: './src/renderer/main.js',
    resolve: {
      extensions: [ '.js', '.vue', '.json', '.ts', '.less' ],
      alias: {
        '@': resolve('src/renderer')
      }
    },
    module: {
      rules: [ {
        test: /\.(html)(\?.*)?$/,
        use: 'vue-html-loader'
      }
      ]
    },
    // 公共资源合并
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: /node_modules/,
            name: 'vendor',
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 100
          },
          common: {
            chunks: 'all',
            test: /[\\/]src[\\/]js[\\/]/,
            name: 'common',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 60
          },
          styles: {
            name: 'styles',
            test: /\.(sa|sc|le|c)ss$/,
            chunks: 'all',
            enforce: true
          },
          runtimeChunk: {
            name: 'manifest'
          }
        }
      }
    },
    // 性能警告修改
    performance: {
      hints: 'warning',
      // 入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  },
  // 打包输出路径
  outputDir: 'dist/web',
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps
    sourceMap: true,
    // css预设器配置项
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#c62f2f',
          'link-color': '#c62f2f',
          'border-radius-base': '4px'
        },
        javascriptEnabled: true
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  // 开发服务器http代理
  devServer: {
    host: 'localhost',
    port: 9080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://localhost:9999/',
        // 是否跨域
        changeOrigin: true,
        // 代理长连接
        ws: true,
        // 重写接口
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/socket': {
        target: 'ws://localhost:9999/',
        ws: true
      }
    }
  }
}
