const Koa = require('koa')
const app = new Koa()
// const router = require('koa-route')

const logger = (ctx, next) => {
    console.log(`${ctx.request.url}-${ctx.request.method}-${Date.now()}`);
    next()
}


const main = ctx => {
    // console.log(ctx);
    ctx.response.body = 'Hello'
    // ctx.response.body = `${ctx.request.url}-${ctx.request.method}-${Date.parse(new Date())}`

}
// app.use(router.get('/', main))
app.use(logger)
app.use(main)
app.listen(3000)