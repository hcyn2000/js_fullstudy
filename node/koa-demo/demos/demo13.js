const koa = require('koa')
const app = new koa()
const route = require('koa-route')


const main = ctx => {
    ctx.response.body = "biezai hello l"
}

const redirect = ctx => {
    ctx.response.redirect('/') //重定向
    ctx.response.body = "<a href='/'>redd</a>"//不执行
}

app.use(route.get('/', main))
app.use(route.get('/redirect', redirect))

app.listen(3000)
