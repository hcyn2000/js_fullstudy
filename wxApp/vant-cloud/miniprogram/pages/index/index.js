// miniprogram/pages/index/index.js
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newGroupModal: false,
    groupName: ""
  },


  showNewGroupModal() {   //新建群组点击事件
    this.setData({
      newGroupModal: true
    })
  },
  closeDialog() {   //点击取消按钮事件
    this.setData({
      newGroupModal: false
    })
  },
  createGroup() {   //点击确认按钮事件
    const self = this
    if (this.data.groupName == '') {
      // 出现notify提示
      Notify({
        message: '请输入群组名字',
        duration: 2000,
        selector: '#notify-selector',
        background: 'red'
      });
      self.selectComponent("#new-group-modal").stopLoading()
      return
    }
    // 调用云函数
    wx.cloud.callFunction({
      name: 'createGroup',
      data: {
        groupName: self.data.groupName
      },
      success(res) {  //调用成功操作
        console.log(res);
        self.setData({
          groupName: '',
          newGroupModal: false
        })
        Notify({
          message: '创建成功',
          duration: 2000,
          selector: '#notify-selector',
          background: '#28a745'
        });
        setTimeout(() => {  //放一个定时器
          wx.switchTab({    //两秒后跳转到群组页面
            url: "/pages/group/group"
          })
        }, 2000)
      },
      fail(error) {
        console.log(error);
      }
    })
  },
  onGroupNameChange(event) {    //弹出框输入的文字
    console.log(event.detail);
    this.setData({
      groupName: event.detail
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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