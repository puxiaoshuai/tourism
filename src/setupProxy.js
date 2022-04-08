const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://www.wanandroid.com/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            }
        })
    );
    app.use(
        '/news',
        createProxyMiddleware({
            target: 'http://localhost:3004/',
            changeOrigin: true,
            pathRewrite: {
                '^/news': '',
            }
        })
    );
};
 