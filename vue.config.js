module.exports = {
  chainWebpack: config => {
    config
      .plugin('html-inline-source')
      .use(require('html-webpack-inline-source-plugin'))
    config.plugin('html').tap(args => {
      args[0].inlineSource = '^(/css/.+\\.css)'
      return args
    })
  }
}