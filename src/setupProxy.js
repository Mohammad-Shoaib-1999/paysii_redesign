// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/paysiiorm',
    createProxyMiddleware({
      target: 'https://tayseertech.com',
      changeOrigin: true,
    })
  );
};
