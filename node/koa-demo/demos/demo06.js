const Koa = require('koa')
const app = new Koa()
const router = require('koa-route')

const about = ctx => {
    ctx.response.type = 'HTML'
    ctx.response.body = '<a href="/">about</a>'
}
const main = ctx => {
    //     if (ctx.request.url == '/about') {
    //         ctx.response.type = 'HTML'
    //         ctx.response.body = '<a href="/">about</a>'
    //     } else {
    //         ctx.response.body = "Hello World"
    //     }
    ctx.response.body = "Hello World"
}

app.use(router.get('/about', about))
app.use(router.get('/', main))

// app.use(main)
app.listen(3000)
