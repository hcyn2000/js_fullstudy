// 栈 是线性结构。 特点：在某一端添加或删除数据，遵循先进后出的原则

class Stack {
    constructor() {
        this.stack = []
    }
    push(item) {// 自己写的方法
        this.stack.push(item)
    }
    pop() {
        this.stack.pop()
    }
    peek() {
        return this.stack[this.getCount() - 1]
    }
    getCount() {
        return this.stack.length
    }
    isEmpty() {
        return this.getCount === 0
    }
}

let stack = new Stack()



// 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串
var isValid = function (s) {
    if (s.length % 2 == 1) return false;
    let map = {
        '(': -1,
        ')': 1,
        '[': -2,
        ']': 2,
        '{': -3,
        '}': 3,
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] < 0) {
            stack.push(s[i])    //1. 先把所有左半边括号存入数组中
        } else {    // 当循环中出现右半边括号时，我们将数组中的元素取出，与之进行匹配
            let last = stack.pop()  // pop() 方法用于删除并返回数组的最后一个元素
            if (map[last] + map[s[i]] != 0) {
                return false
            }
        }
    }
    if (stack.length > 0) {
        return false
    }
    return true
};