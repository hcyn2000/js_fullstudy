// 引入依赖     commonJS
const Koa = require('koa')

const app = new Koa()   // 定义一个新的koa实例

// ctx.request.accepts 检查HTTP请求的accepts的内容的
// Accepts属于请求头，代表客户端希望接受的数据类型，跟Content-type类似
const main = ctx => {
    console.log(ctx.request)
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml'
        ctx.response.body = '<data>Hello</data>'
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html'
        ctx.response.body = '<p>Hello</p>'
    } else if (ctx.request.accepts('json')) {
        ctx.response.type = 'json'
        ctx.response.body = '{data: Hello}'
    } else {
        ctx.response.type = 'text'
        ctx.response.body = 'Hello'
    }
}
app.use(main)

app.listen(3000, () => {
    console.log('项目启动');
})