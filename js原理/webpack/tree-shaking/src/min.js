export default function (a, b) {
  return a - b
}
// 副作用
// log 请求 读写文件  ...会对其他东西造成影响的统称为副作用
console.log('side');