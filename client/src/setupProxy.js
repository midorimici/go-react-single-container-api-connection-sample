const { createProxyMiddleware } = require('http-proxy-middleware');

const API_PORT = process.env.API_PORT;
const API_URL = `http://localhost:${API_PORT}`;

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
      pathRewrite: {
        '/api': API_URL,
      },
    })
  );
};
