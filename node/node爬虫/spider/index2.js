const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')

// 通过https模块的get方法，请求网站链接，在回调函数中获取资源
https.get('https://www.bilibili.com', (res) => {
    // console.log(res);
    // 因为获取到的资源是分段返回的，所以需要手动拼接，用html拼接
    let html = ''
    // res.on 类似于 addEventlistener
    res.on('data', (chunk) => {
        html += chunk
    })

    // 当res数据加载完成，去执行xx逻辑
    res.on('end', () => {
        // 操作dom结构
        const $ = cheerio.load(html)    // 通过 cheerio.load 加载html结构
        let allFilms = []   //存放爬取到的数据
        $('.recommend-box .video-card-reco').each(function () {    //jQuery 遍历 each()
            // const title = $('.title', this).text()
            // const star = $('.up', this).text()
            const pic = $('.info-box img', this).attr('src')
            allFilms.push({ pic })
        })
        // console.log(allFilms);
        fs.writeFile('./files2.json', JSON.stringify(allFilms), (err) => {
            console.log('写入成功');
        })
    })
})

