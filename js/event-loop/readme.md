# 进程和线程的区别？
进程是指cpu在运行指令及保存和加载上下文所需的时间
线程是进程中一个更小的单位，它描述的是执行一段指令所需要的时间，一个进程里有多个线程

# js单线程的优缺点？
js是单线程，js里面的线程执行是互斥的，单线程节约内存


# 什么是执行栈？
执行栈是一个存储函数调用的栈结构


# Event-Loop
同步代码
异步代码 : 微任务 (microtask)    宏任务 (macrotask)

微任务: process.nextTick, Promise, MutationObserver
宏任务: script, setTimeout, setInterval, setImmediate, I/O, UI rendering


# Event-Loop执行顺序
1. 首先执行同步代码, 这属于宏任务
2. 当执行完同步代码后, 执行栈为空, 查询是否有异步代码需要执行
3. 执行微任务
4. 当执行完所有的微任务后, 如果有必要会渲染页面
5. 然后开始下一轮Event Loop, 执行宏任务中的异步代码