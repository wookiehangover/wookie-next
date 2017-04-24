const isProd = process.NODE_ENV === 'production'
module.exports = {
  // You may only need to add assetPrefix in the production.
  assetPrefix: isProd ? 'https://wookiehangover.github.io/wookie-next/' : ''
}
