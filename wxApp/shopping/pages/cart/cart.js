// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],
    totalPrice: 0,
    selectAllStatus: true
  },
  // 单选是否选择
  selectList(e) {
    // console.log(e);
    const index = e.currentTarget.dataset.index;  // 获取data- 传进来的index
    const selected = `carts[${index}].selected`;
    this.setData({
      [selected]: !this.data.carts[index].selected    // 改变状态
    });
    this.getTotalPrice()
    //但凡carts数组中存在一条数据里面的selected不为true，全选按钮就不能勾选
    let carts = this.data.carts
    for (let i = 0; i < carts.length; i++) {
      if (!carts[i].selected) {
        this.setData({
          selectAllStatus: false
        })
        break;
      } else {
        this.setData({
          selectAllStatus: true
        })
      }
    }
  },
  // 是否全选
  selectAll() {
    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;            // 改变所有商品状态
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice()
  },

  //计算总价格
  getTotalPrice() {
    let carts = this.data.carts
    let sum = 0
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected == true) {
        sum += carts[i].num * carts[i].price
      }
    }
    this.setData({
      totalPrice: sum.toFixed(2)
    })
  },

  //加号
  addCount(e) {
    // console.log(e);
    const index = e.currentTarget.dataset.index
    let carts = this.data.carts
    let num = carts[index].num
    num += 1
    carts[index].num = num
    this.setData({
      carts: carts
    })
    this.getTotalPrice()
  },

  //减号
  minusCount(e) {
    // console.log(e);
    const index = e.currentTarget.dataset.index
    let carts = this.data.carts
    let num = carts[index].num
    if (num <= 1) {
      return false
    }
    num -= 1
    carts[index].num = num
    this.setData({
      carts: carts
    })
    this.getTotalPrice()
  },
  //删除
  deleteList(e) {
    console.log(e);
    let index = e.currentTarget.dataset.index
    let carts = this.data.carts
    carts.splice(index, 1)
    this.setData({
      carts: carts
    })
    if (!carts.length) {
      this.setData({
        selectAllStatus: false

      })
      this.getTotalPrice()
    } else {
      this.getTotalPrice()
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('onLoad');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('onShow');
    // setTimeout()方法 设置多少时间后干什么事
    setTimeout(() => {
      this.setData({
        carts: [
          { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 1, price: 1, selected: true },
          { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 2, selected: true }
        ]
      })
      this.getTotalPrice()
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log('onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log('onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})