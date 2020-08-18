
const Koa = require('koa')

const app = new Koa()

const main = ctx => {
    if (ctx.request.url !== '/') {
        ctx.response.type = 'html'
        ctx.response.body = '<a href="/">index</a>'
    } else {
        ctx.response.body = 'Hello'
    }
}
app.use(main)
app.listen(3000, () => {
    console.log('项目启动');
})