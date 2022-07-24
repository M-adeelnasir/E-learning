const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware')
const next = require('next')

const dev = process.env.NEXT_PUBLIC_NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()


app.prepare().then(() => {
    const server = express();
    if (dev) {
        server.use('/api/v1', createProxyMiddleware({ target: 'http://localhost:4000', changeOrigin: true }));

    }

    server.all("*", (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, ((err) => {
        if (err) throw err;
        // console.log('>Ready on http://localhost:4000/api/v1');
    }))
}).catch((err) => {
    console.log("ERROR", err);
})
