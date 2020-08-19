const Koa = require('koa')
const app = new Koa()
const router = require('koa-route')

const main = ctx => {
    // console.log(ctx);
    // ctx.response.body = ctx.request.url + "<br/>" + ctx.request.method + "<br/>" + Date.now()
    ctx.response.body = `${ctx.request.url}-${ctx.request.method}-${Date.now()}`

}
app.use(router.get('/', main))

app.listen(3000)