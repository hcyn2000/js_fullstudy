// 单例模式的定义是：保证一个类仅有一个实例，并提供一个访问它的全局访问点。

// export store extends Vuex.Store()

class SingleDog {
    show() {
        console.log('我是一个单例对象');
    }
    // static 只能被本身调用，实例不能调用
    static getInstance() {
        // 判断是否被new过
        // if (!SingleDog.instance) {
        //     SingleDog.instance = new SingleDog()
        // }
        // return SingleDog.instance


        let instance = null
        return !function () {
            if (!instance) {
                instance = new SingleDog()
            }
            return instance
        }()
    }
}

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

console.log(s1 === s2);   // true