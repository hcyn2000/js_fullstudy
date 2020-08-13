// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'wxapp-fpicz'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  // console.log(event);
  const userInfo = event.userInfo
  // 连通数据库
  return await db.collection('group').add({
    data: {
      name: event.groupName,      //名字
      createBy: userInfo.openId,  //谁存储的
      createTime: new Date(),     //创造的时间
      deleted: false,
      updateTime: new Date()      //更新的时间
    }
  })
    .then(res => {
      return db.collection('user-group').add({
        data: {
          groupId: res._id,
          userId: userInfo.openId,
          invalid: false
        }
      })
    })
}