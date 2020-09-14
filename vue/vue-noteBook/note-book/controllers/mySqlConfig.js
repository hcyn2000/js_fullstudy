var mysql = require('mysql')
var config = require('./defaultConfig')

// 链接线程池
var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT,
})

// 统一链接数据库的方法
let allServices = {
    query: function (sql, valuse) {
        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) { // 建立数据库连接
                if (err) {
                    reject(err)
                } else {
                    connection.query(sql, valuse, (err, rows) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release()    // 释放连接
                    })
                }
            })
        })
    }
}

// 读取users表所有数据
let getAllUsers = function () {
    let _sql = `select * from users;`
    return allServices.query(_sql)
}


// 需要导出方法
module.exports = {
    getAllUsers
}