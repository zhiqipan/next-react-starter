const withSass = require('@zeit/next-sass')
require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')

const env = process.env.NODE_ENV || 'development'

module.exports = withSass({
  webpack(config, options) {
    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, `.env.${env}`),
        systemvars: true,
      }),
    ]
    return config
  },
})
