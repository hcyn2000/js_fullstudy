const Vue = require('vue')
const express = require('express')
const server = express()
const Render = require('vue-server-renderer')
const render = Render.createRenderer({})
// createApp 指向 entry-server 函数 ，被webpack打包成 commonjs2
const createApp = require('./dist/server.bundle.js').default;

server.get('*', (req, res) => {
  const app = createApp()
  let context = {}
  render.renderToString(app, context, (err, html) => {
    if (err) {
      console.log(err);
    }
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(html)
  })

})
server.listen(8080, () => {
  console.log('server is running 8080');
})