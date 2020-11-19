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
      // router[method](path === '/' ? prefix : prefix + path, routes[key])
      router[method](path === '/' ? prefix : prefix + path, async ctx => {
        app.ctx = ctx
        await routes[key](app)
      })
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

function initService() {
  const services = {}
  // 读取控制器目录
  load('service', (filename, service) => {
    services[filename] = service
  })
  return services
}

const Sequelize = require('sequelize')
function loadConfig(app) {
  load('config', (filename, conf) => {
    if (conf.db) {
      app.$db = new Sequelize(conf.db) // 初始化db操作的

      // 加载模型
      app.$model = {}
      load('model', (filename, { schema, options }) => {
        app.$model[filename] = app.$db.define(filename, schema, options) // 将sequelize一个个模型全部加载
      })
      app.$db.sync() // 模块同步
    }

    if (conf.middleware) {
      conf.middleware.forEach(mid => {
        const midPath = path.resolve(__dirname, 'middleware', mid)
        app.$app.use(require(midPath))
      })
    }
  })
}

module.exports = {
  initRouter,
  initController,
  initService,
  loadConfig
}


// load('routes', (filename, file) => {
//   console.log(filename, file);
// })

// initRouter()