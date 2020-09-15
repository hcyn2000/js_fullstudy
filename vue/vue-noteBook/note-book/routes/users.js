const router = require('koa-router')()

const userServe = require('../controllers/mySqlConfig')

router.prefix('/users') //加前缀

router.get('/all', async (ctx, next) => {  //get是请求方式
  await userServe.getAllUsers().then((res) => {
    ctx.body = res
  })
})

// 登录注册的接口
router.post('/userRegister', async (ctx, next) => {
  var _username = ctx.request.body.username
  var _userpwd = ctx.request.body.userpwd
  var _nickname = ctx.request.body.nickname
  if (!_username || !_userpwd || !_nickname) {
    ctx.body = {
      code: '80001',
      mess: '用户名、密码或昵称不能为空'
    }
    return
  }
  let user = {
    username: _username,
    userpwd: _userpwd,
    nickname: _nickname
  }
  await userService.findUser(user.username).then(async (res) => {
    if (res.length) {
      try {
        throw Error('用户名已存在')
      } catch (error) {
        console.log(error)
      }
      ctx.body = {
        code: '80003',
        data: 'err',
        mess: '用户名已存在'
      }
    } else {
      await userService.insertUser([user.username, user.userpwd, user.nickname])
        .then((res) => {
          // console.log(res)
          let r = ''
          if (res.affectedRows !== 0) {
            r = 'ok'
            ctx.body = {
              code: '80000',
              data: r,
              mess: '注册成功'
            }
          } else {
            r = 'error'
            ctx.body = {
              code: '80004',
              data: r,
              mess: '注册失败'
            }
          }
        })
        .catch((err) => {
          ctx.body = {
            code: '80002',
            data: err
          }
        })
    }
  })
    .catch((err) => {
      ctx.body = {
        code: '80002',
        data: err
      }
    })
})

module.exports = router
