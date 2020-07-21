//index.js
//获取应用实例
const app = getApp()
const cars = [];
Page({
  data: {
    articleList: [],
    isHidden: false,
    markers: [{
      iconPath: "/resources/car.png",
      id: 0,
      latitude: 28.723128,
      longitude: 115.836737,
      width: 30,
      height: 30
    }, {
      iconPath: "/resources/car.png",
      id: 1,
      latitude: 23.099894,
      longitude: 113.326820,
      width: 30,
      height: 30
    }],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    setTimeout(() => {
      this.setData({
        articleList: [{
          date: '6月27日',
          articles: [
            {
              id: 0,
              title: 'aaa',
              pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2834999481,1380824893&fm=26&gp=0.jpg'
            },
            {
              id: 1,
              title: 'bbb',
              pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2834999481,1380824893&fm=26&gp=0.jpg',
            }
          ]
        }],
        isHidden: true
      })
      console.log(this.data.articleList)
    }, 2000)
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
