const compose = require('koa-compose')
const Koa = require('koa')
const app = new Koa()

const logger = (ctx, next) => {
    console.log(`${ctx.request.url}-${ctx.request.method}-${Date.now()}`);
    next()
}

const main = ctx => {
    // console.log(ctx);
    ctx.response.body = 'Hello'
}

const middlewares = compose([logger, main])
app.use(middlewares)
// app.use(logger)
// app.use(main)
app.listen(3000)