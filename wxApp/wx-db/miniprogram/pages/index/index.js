//index.js
const app = getApp()
const db = wx.cloud.database();
// mysql  table  row fields
// mongodb(js) collection json Document 
const productsCollection =
  db.collection('products');
Page({
  uploadAvatar() {
    //上传图片  选择上传类型
    // 拿到图片
    //上传到云服务器
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: res => {
        // console.log(res.tempFilePaths);
        for (let filePath of res.tempFilePaths) {
          let currentFileName = Math.floor(Math.random() * 1000000).toString() + '.png';
          wx.cloud.uploadFile({
            cloudPath: currentFileName,
            filePath,
            success: res => {
              console.log(res);
              // success
            }
          })
        }
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  data: {
    products: []
  },
  gotoDetail(event) {
    productsCollection.doc(
      event.currentTarget.dataset.id
    )
  },
  onLoad() {
    productsCollection
      .get()
      .then(res => {
        console.log(res);
        this.setData({
          products: res.data
        })
      })
  }
})
