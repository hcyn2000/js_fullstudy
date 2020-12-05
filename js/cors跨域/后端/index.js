const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
  // 指定了允许访问该资源的外域 URI
  ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

  // 用于预检请求的响应。其指明了实际请求中允许携带的首部字段。
  ctx.set('Access-Control-Allow-Headers', 'content-type');

  // 让服务器把允许浏览器访问的头放入白名单
  ctx.set('Access-Control-Expose-Headers', 'X-baidu')

  // 非简单请求发一个请求方式是 options 的预检请求   
  // 指定了preflight(预检)请求的结果能够被缓存多久
  ctx.set('Access-Control-Max-Age', 60 * 60)

  // 指定了当浏览器的credentials设置为true时是否允许浏览器读取response的内容
  ctx.set('Access-Control-Allow-Credentials', true)

  // 指明了实际请求所允许使用的 HTTP 方法。
  ctx.set('Access-Control-Allow-Methods', '*');

  await next()
})

router.post('/', (ctx, next) => {
  // ctx.router available
  ctx.set('Content-Type', 'application/json')
  ctx.set('X-baidu', 'xxxxx')
  ctx.body = {
    code: 0
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(9090, () => {
  console.log('9090');
})