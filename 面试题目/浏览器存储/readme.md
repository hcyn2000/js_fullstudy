# Cookies   LocalStorage   SessionStorage   IndexedDB

Cookies:
  可设置过期时间
  4K
  每次都携带在header中，影响请求的性能
LocalStorage:
  需要手动清除
  5M
  不参与
SessionStorage:
  关闭浏览器消失
  5M
  不参与
IndexedDB:
  需要手动清除
  无限大(取决于电脑硬盘内存)
  不参与


Cookies:
  value: 保存用户登录状态，值应该加密
  http-only: 不能通过js访问cookies，防止xss攻击
  secure: 只在传输协议为https的请求中存在
  same-site: 规定浏览器不能在跨域请求中携带cookies，减少CSRF攻击


# 什么是 Service Workers
运行在浏览器背后的独立线程，一般用来实现缓存的功能，传输协议必须是HTTPS