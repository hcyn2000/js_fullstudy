// ajax
// wx.request  从本地小程序 -> 服务器
// fetch   web做接口请求语法的地方
const bannerEle = document.querySelector('#banner')

fetch('http://neteasecloudmusicapi.zhaoboy.com/banner')
    .then(data => data.json())
    .then(data => {
        // console.log(data);
        if (data.code == 200) { //状态码
            const banners = data.banners;
            const html = banners.map((banner) => {
                // console.log(banner);
                return `
                <img src="${banner.imageUrl}"/>
                `
            })
            console.log(html);
            bannerEle.innerHTML = html.join('')
            // console.log(banners);
            // array -> html DOM 节点
            // 

            // for (let banner of banners) {
            //     // console.log(banner);
            //     bannerEle.innerHTML += `<img src="${banner.imageUrl}"/>`
            // }
        } else {
            console.log('请求失败');
        }

    })