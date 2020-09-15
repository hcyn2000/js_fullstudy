var mysql = require('mysql')
var config = require('./defaultConfig')

//链接数据库
//连接线程池
var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT,
})

//统一连接数据库的方法
let allServers = {
    query: function (sql, values) { //sql是操作数据库的语句,values是
        return new Promise((resolve, reject) => {//建立连接
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err)
                } else {
                    connection.query(sql, values, (err, rows) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release() //关闭连接，释放连接，一直建立连接会销毁性能
                    })
                }
            })
        })
    }
}

//读取测试
let getAllUsers = function () {
    let _sql = `select * from users;`
    return allServers.query(_sql)
}
// 用户登录
let userLogin = function (username, userpwd) {
    let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
    return allServers.query(_sql)
}

//查找用户
let findUser = function (username) {
    let _sql = `select * from users where username="${username}";`
    return allServers.query(_sql)
}

//用户注册
let insertUser = function (value) {
    let _sql = `insert into users set username=?,userpwd=?,nickname=?;`
    return allServers.query(_sql, value)
}


//导出方法
module.exports = {
    getAllUsers,
    userLogin,
    findUser,
    insertUser,
}
