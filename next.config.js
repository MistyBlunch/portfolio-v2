const { i18n } = require('./next-i18next.config.js')
require('dotenv').config()

const nextConfig = {
  i18n,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/pdfs/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      }
    ]
  }
}

module.exports = nextConfig
