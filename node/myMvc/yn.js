const Koa = require('koa')

const { initRouter, initController, initService, loadConfig } = require('./yn-loader')

class Yn {
  constructor(conf) {
    this.$app = new Koa(conf)
    // 加载配置项
    loadConfig(this)
    this.$ctrl = initController(this)
    this.$service = initService()
    this.$router = initRouter(this)
    this.$app.use(this.$router.routes())
  }

  start(port) {
    this.$app.listen(port, () => {
      console.log('一诺服务启动成功 端口:' + port)
    })
  }
}

module.exports = Yn