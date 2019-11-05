const { join } = require('path')
const resolve = filepath => join(__dirname, filepath)

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'https://datashare.icij.org/' : './',
  chainWebpack: config => {
    // Aliases configuration
    config.resolve.alias
      .set('images', resolve('src/assets/images'))
      .set('node_modules', resolve('node_modules'))
  }
}
