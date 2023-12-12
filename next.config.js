const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
  env: {
    REACT_APP_API: 'http://localhost:3000'
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  reactStrictMode: true,
  experimental: { appDir: true }
})
