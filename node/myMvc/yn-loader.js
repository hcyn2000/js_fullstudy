const fs = require('fs')
const path = require('path')
const Router = require('koa-router')


// 读取目录和文件
function load(dir, cb) {
  const url = path.resolve(__dirname, dir)  // 获取绝对路径文件夹
  // 读取目录
  const files = fs.readdirSync(url)  // 返回的是Array
  files.forEach((filename) => {
    filename = filename.replace('.js', '')   // 去掉扩展名
    const file = require(url + '/' + filename)  // 获取绝对路径文件
    cb(filename, file)
  })
}


// 加载路由
function initRouter(app) {
  const router = new Router()
  load('routes', (filename, routes) => {
    const prefix = filename === 'index' ? '' : `/${filename}` // 判断文件是否是index
    routes = typeof routes === 'function' ? routes(app) : routes
    Object.keys(routes).forEach(key => {
      const [method, path] = key.split(' ')
      console.log(`正在映射地址:${method.toLocaleUpperCase()} ${prefix} ${path}`)

      // 注册路由
      // app.get('/', ctx => {})
      router[method](path === '/' ? prefix : prefix + path, routes[key])
    })
  })
  return router
}


// 
function initController(app) {
  const controllers = {}
  // 读取控制器目录
  load('controller', (filename, controller) => {
    controllers[filename] = controller
  })
  return controllers
}

module.exports = {
  initRouter,
  initController
}


// load('routes', (filename, file) => {
//   console.log(filename, file);
// })

// initRouter()