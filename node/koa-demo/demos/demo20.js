const Koa = require('koa')
const app = new Koa()
const KoaBody = require('koa-body')

const main = ctx => {
    // const body = ctx.require.body
    // if (!body.name) {
    //     ctx.throw(400, '.request.name')
    // }
    // ctx.response.body = { name: body.names }

    ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
}

app.use(KoaBody())
app.use(main)
app.listen(3000)