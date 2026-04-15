const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack: (config) => {
    config.optimization = {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'chunk-vendors'
          },
          commons: {
            name: 'chunk-commons',
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    }

    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new CompressionPlugin({
          algorithm: 'gzip',
          threshold: 1024,
          minRatio: 0.8,
          compressionOptions: { level: 6 },
          test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
          filename: '[path][base].gz'
        })
      )
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 75
      })

    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: {
          progressive: true,
          quality: 80
        },
        optipng: {
          enabled: true
        },
        pngquant: {
          quality: [0.65, 0.90],
          speed: 4
        },
        gifsicle: {
          interlaced: false
        },
        webp: {
          quality: 80
        }
      })
      .end()

    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))

    config.output.filename('js/[name].[contenthash:8].js')
    config.output.chunkFilename('js/[name].[contenthash:8].js')
  }
}