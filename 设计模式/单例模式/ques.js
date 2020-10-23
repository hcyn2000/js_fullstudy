// 实现一个Storage,使得该对象为单例，基于localStorgae
// 实现方法setItem(key, vlaue)和getItem(key)

// class Storage {
//   setItem(key, vlaue) {
//     return localStorage.setItem(key, vlaue)
//   }
//   getItem(key) {
//     return localStorage.getItem(key)
//   }
//   static getInstance() {
//     if (!Storage.instance) {
//       Storage.instance = new Storage()
//     }
//     return Storage.instance
//   }
// }

function StorageBase() { }
StorageBase.prototype.getItem = function (key) {
  return localStorage.getItem(key)
}
StorageBase.prototype.setItem = function (key) {
  return localStorage.setItem(key)
}
const Storage = (function () {
  let instance = null
  return function () {
    if (!instance) {
      instance = new StorageBase()
    }
    return instance
  }
})()


const storage1 = new Storage()

storage1.setItem('name', 'yn')
storage1.getItem('name')