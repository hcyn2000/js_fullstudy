const Vue = require('vue')
const express = require('express')
const server = express()
const Render = require('vue-server-renderer')
const fs = require('fs')
const render = Render.createRenderer({
  template: fs.readFileSync('./src/index.template.html', 'utf-8')
})
// 把dist目录东西通过路劲名能够访问到他们
server.use(express.static())
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
    // 渲染出去的页面只是HTML
    // 如果要是有事件，必须addEventListeber绑定，node端并没有这样的api
    // 事件必须由浏览器来绑定
    res.end(html)
  })
})
server.listen(8080, () => {
  console.log('server is running 8080');
})