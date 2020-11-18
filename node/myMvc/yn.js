const Koa = require('koa')

const { initRouter, initController } = require('./yn-loader')

class Yn {
  constructor(conf) {
    this.$app = new Koa(conf)
    this.$ctrl = initController(this)
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