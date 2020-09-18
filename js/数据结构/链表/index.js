// 链表 是线性结构， 同时也是一个天然的递归结构，列表结构可以充分利用计算机内存空间
// 实现灵活的内存动态管理，没有和数组一样随机读取的特点

// 单向链表
class Node {
    constructor(v, next) {
        this.value = v
        this.next = next
    }
}

class LinkList {
    constructor() {
        // 链表的长度
        this.size = 0
        // 头部
        this.dummyNode = new Node(null, null)
    }
    find(header, index, currentIndex) {     // 查找链表元素
        if (index === currentIndex) return header
        return this.find(header.next, idex, currentIndex + 1)
    }
    addNode(v, index) {     //往链表里面存数据
        // 查找当前添加的元素的下标索引
        this.checkIndex(index)
        // 往链表末尾插入时，prev.next 为空
        // 其他情况需要设置prev.next 为插入的节点
        let prev = this.find(this.dummyNode, index, 0)
        prev.next = new Node(v, prev.next)
        this.size++
        return prev.next
    }

    insertNode(v, index) {  // 往链表里面存数据
        return this.addNode(v, index)
    }

    removeNode(index, isLsat) {  // 移除链表里面的数据
        this.checkIndex(index)
        index = isLsat ? index - 1 : index
        let prve = this.find(this.dummyNode, index, 0)
        let node = prve.next
        prve.next = node.next
        node.next = null
        this.size--
        return node
    }

    addToFirst(v) { // 往链表头部添加元素
        return this.addNode(v, 0)
    }

    addToLast(v) {  // 往链表尾部添加元素
        return this.addNode(v, this.size)
    }

    checkIndex(index) {
        if (index < 0 || index > this.size) {
            throw Error('index error')
        }
    }
}

let link = new LinkList()
link.addToFirst('aaa')
link.insertNode('bbb', 1)
console.log(link);



// 剑指 Offer 18. 删除链表的节点
//https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
var deleteNode = function (head, val) {
    let headNode = new ListNode()
    headNode.next = head
    let previous = headNode
    let current = head

    while (current) {
        if (current.val === val) {
            let temp = current.next
            previous.next = temp
            current.next = null
            break
        }
        previous = current
        current = current.next
    }
    return headNode.next
};