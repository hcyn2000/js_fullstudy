http://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html
## 登录
cookie 保存用户信息，后续一段就不用再登录了
api.juejin.cn
api.juejin,cn/delete/01   验证用户身份 (cookie后端能验证)

另外一个黑客域名下面请求 api.juejin.cn
1. xhr fetch 跨域不能伪造这个请求
2. GET: script img link, POST: from 就能伪造了
api.juejin,cn/delete/01   验证用户身份 (后端无法拿到cookie)

cookie 不能跨域： 仅限于最新的 chrome 提出来的 sameSite 为 strict

1. sameSite 设置为 strict 或 lax
2. 用户登录成功时候给他一个 token，之后前端每个请求都带上这个token，黑客网站拿不到token，网站没有token就拒接它登录