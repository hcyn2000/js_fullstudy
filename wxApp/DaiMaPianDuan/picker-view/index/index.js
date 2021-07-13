const date = new Date()
const nowYear = date.getFullYear()
const nowMonth = date.getMonth() + 1
const nowDay = date.getDate()
let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// 根据年月获取当月的总天数
let getDays = function (year, month) {
  if (month === 2) {
    return ((year % 4 === 0) && ((year % 100) !== 0)) || (year % 400 === 0) ? 29 : 28
  } else {
    return daysInMonth[month - 1]
  }
}
// 根据年月日设置当前月有多少天 并更新年月日数组
let setDate = function (year, month, day, _this) {
  let daysNum = year === nowYear && month === nowMonth ? nowDay : getDays(year, month)
  day = day > daysNum ? 1 : day
  let monthsNum = year === nowYear ? nowMonth : 12
  let years = []
  let months = []
  let days = []
  // let yearIndex = 9999
  // let monthIndex = 0
  // let dayIndex = 0
  // 重新设置年份列表
  for (let i = 2000; i <= nowYear; i++) {
    years.push(i)
  }
  // years.map((v, idx) => {
  //   if (v === year) {
  //     yearIndex = idx
  //   }
  // })
  // 重新设置月份列表
  for (let i = 1; i <= monthsNum; i++) {
    var k = i;
    months.push(k)
  }
  // months.map((v, idx) => {
  //   if (v === month) {
  //     monthIndex = idx
  //   }
  // })
  // 重新设置日期列表
  for (let i = 1; i <= daysNum; i++) {
    var k = i;
    days.push(k)
  }
  // days.map((v, idx) => {
  //   if (v === day) {
  //     dayIndex = idx
  //   }
  // })
  _this.setData({
    //时间列表参数
    years: years,
    months: months,
    days: days,
    //选中的日期
    year: year,
    month: month,
    day: day,
    // value: [yearIndex, monthIndex, dayIndex],
  })
}
Page({
  data: {
    //时间列表参数
    // flag: false,
    years: [],
    months: [],
    days: [],
    //选中的日期
    year: nowYear,
    month: nowMonth,
    day: nowDay,
    value: [9999, 3, 1],
  },
  onLoad(options) {
    console.log('onLoad监听页面加载');

    setDate(this.data.year, this.data.month, this.data.day, this);
    this.setData({
      value: [nowYear, nowMonth, nowDay]
    })
  },
  bindChange: function (e) {
    let val = e.detail.value
    console.log(val);
    setDate(this.data.years[val[0]], this.data.months[val[1]], this.data.days[val[2]], this)
  }
})
