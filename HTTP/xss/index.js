const Koa = require('koa')
const KoaView = require('koa-views')
const router = require('koa-router')()
const path = require('path')

const app = new Koa()
const viewPath = path.join(__dirname, './views')
app.use(KoaView(viewPath, {
  extension: 'ejs'
}))

// html css js: 如果我们不想让他们当做可执行代码，就转义他们
// html 转义(过滤): https://dev.w3.org/html5/html-author/charref
// js 转义: \x unicode码点16进制表现形式
// cookie: httpOnly 设置为 true
// CSP: 内容安全策略

router.get('/', async (ctx) => {
  let xss = `<h2>xss</h2> <img onerror="alert(123)" src="xxx" />`
  function toString(html) {
    return html.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }

  let js = `";alert('css by js');"`
  function toString2(js) {
    let t = ''
    let code = '\\x' + "\"".charCodeAt(0).toString(16)
    return js.replace(/"/g, code)
  }

  await ctx.render('xss', {
    xssCode: toString(xss),
    js: toString2(js)
  })
})
app.use(router.routes()).use(router.allowedMethods())

app.listen(8080, () => {
  console.log(8080);
})