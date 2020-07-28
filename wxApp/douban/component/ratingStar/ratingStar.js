// component/ratingStar/ratingStar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: String,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    grade: 0,
    harf: 0,
    off: 0
  },
  lifetimes: { // 组件生命周期声明对象，将组件的生命周期收归到该字段进行声明，原有声明方式仍旧有效，如同时存在两种声明方式，则lifetimes字段内声明方式优先级最高
    attached: function () { // 在组件实例进入页面节点树时执行
      // console.log(this.data.score)
      this.setData({
        grade: Math.floor(this.data.score),
        harf: this.data.score - this.data.grade,
        off: Math.floor(5 - this.data.score)
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
