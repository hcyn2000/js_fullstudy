const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'


function MyPromise(fn) {
  const that = this
  that.state = PENDING
  that.value = null   // resolve/reject  接收的值
  that.resolvedCallbacks = [] // .then(() => {})
  that.rejectedCallbacks = []

  function resolve(value) {
    if (that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolvedCallbacks.map(cb => {
        return cb(that.value)
      })
    }
  }

  function reject(value) {
    if (that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.rejectedCallbacks.map(cb => {
        return cb(that.value)
      })
    }
  }

  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }
}


MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }

  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled)
    that.rejectedCallbacks.push(onRejected)
  }

  if (that.state === RESOLVED) {
    onFulfilled(that.value)
  }

  if (that.state === REJECTED) {
    onRejected(that.value)
  }
}

// new MyPromise() ==> { state: 'pending', value: null }
new Promise(function (resolve, reject) {
  resolve('123')
}).then((res) => {
  console.log(res);
})