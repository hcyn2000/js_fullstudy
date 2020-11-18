// const app = new (require('koa'))()
// const { initRouter } = require('./yn-loader')
// app.use(initRouter().routes())
// app.listen(3000)



const Yn = require('./yn.js')
const app = new Yn()

app.start(3000)