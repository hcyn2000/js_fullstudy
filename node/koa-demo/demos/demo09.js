
const Koa = require('koa')
const app = new Koa()

const noe = (ctx, next) => {
    console.log('<<noe');
    next()
    console.log('noe>>');
}
const two = (ctx, next) => {
    console.log('<<tow');
    next()
    console.log('tow>>');
}
const three = (ctx, next) => {
    console.log('<<three');
    next()
    console.log('three>>');
}

app.use(noe)
app.use(two)
app.use(three)
app.listen(3000)