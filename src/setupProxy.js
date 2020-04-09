const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://staging-ng.morressier.com/events_manager/v3/posters/search',
      changeOrigin: true,
    })
  );
};