const trendings = () => new Promise((resqlve, reject) => {
    setTimeout(() => {
        resqlve([{
            repo: '阿雷项目'
        }])
    }, 2000);
})

const getRepo = () => new Promise((resqlve, reject) => {

})

module.exports = {
    trendings,
    getRepo
}