// const hc = {
//     name: '红尘',
//     age: 20,
//     carrer: 'coder'
// }

// const yn = {
//     name: '一诺',
//     age: '18',
//     career: 'manager'
// }

// function User(name, age, career) {
//     this.name = name
//     this.age = age
//     this.career = career
// }

// const user = new User(name, age, career)



// 什么东西变，什么东西不变
function User(name, age, career, work) {
  this.name = name
  this.age = age
  this.career = career
  this.work = work
}

function Code(name, age) {
  this.name = name
  this.age = age
  this.carerr = 'coder'
  this.work = ['写代码', '写系统', '改bug']
}

function ProductManager(name, age) {
  this.name = name
  this.age = age
  this.carerr = 'product manager'
  this.work = ['订会议室', '写ppt', '催更']
}

function Factory(name, age, career) {
  let work
  switch (career) {
    case 'coder':
      work = ['写代码', '写系统', '改bug']
      break
    case 'product manager':
      work = ['订会议室', '写ppt', '催更']
      break
    case 'boss':
      work = ['喝茶', '看报', '见客户']
      break
  }
  return new User(name, age, career, work)
}

