const http = require('http')
const qs = require('querystring')

http.createServer((req, res) => {
  console.log(req.url);
  if (req.url.includes('/api')) {   // 用includes判断req.url是否是/api
    let json = {
      code: 0
    }
    let fn = qs.parse(req.url.split('?')[1]).callback
    res.end(`${fn}(${JSON.stringify(json)})`)
  } else {
    res.end('')
  }
})
  .listen(8088, () => {
    console.log(8088);
  })