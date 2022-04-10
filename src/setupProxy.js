const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/news',
        createProxyMiddleware({
            target: 'https://www.wanandroid.com/',
            changeOrigin: true,
            pathRewrite: {
                '^/news': '',
            }
        })
    );
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:3004/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            }
        })
    );
};
 