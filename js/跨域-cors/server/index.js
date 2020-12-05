const Koa = require('koa');
const app = new Koa();
const path = require('path');
const router = require('koa-router')();

// koa 中间件
app.use(async (ctx, next) => {
    // 允许哪个域名请求 *
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:5500');
    // 服务器支持的头部 
    ctx.set('Access-Control-Allow-Headers', 'x-custom,content-type');
    // 支持的方法
    ctx.set('Access-Control-Allow-Methods', '*');
    // 允许 携带 cookie
    // 设置为 允许的时候 Access-Control-Allow-Origin 需要是一个具体的域名
    // 不能是 *
    ctx.set('Access-Control-Allow-Credentials', true);
    // Access-Control-allow-Max-Age: 预检请求的缓存时间 500ms 之内都不用再发预检请求     (每个浏览器初始时间不一样)
    // Access-Control-expose-Headers    前端 js 可以拿到的响应头有哪些
    await next();
})

router.post('/api', async function (ctx) {
    // // console.log('cookie', ctx.cookies.get('name'));
    // ctx.cookies.set('key', 'value');
    ctx.body = [
        { title: 'node.js 入门到精通', createTime: '2018-12-12' },
        { title: 'php 入门到精通', createTime: '2018-11-11' },
    ]
});


app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(9090, () => {
    console.log('server is running 9090');
});
