const fs = require('fs')
const path = require('path')


// 读取目录和文件
function load(dir, cb) {
  // 获取绝对路径
  const url = path.resolve(__dirname, dir)
  // 读取目录
  const files = fs.readdirSync(url)  // 返回的是Array
  files.forEach((filename) => {
    // 去掉扩展名
    filename = filename.replace('.js', '')
    const file = require(url + '/' + filename)
    cb(filename, file, url)
  })
}



// 加载路由
load('routes', (filename, file, url) => {
  console.log(filename, file, url);
})