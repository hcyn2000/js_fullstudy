# 前端路由

1. 如何改变url却不引起页面的刷新？      // 前面加个#/
2. 如何知道url变化？        // location.hash 能拿到哈希值

hash
通过监听 hashchange 事件监听 url 的变化

改变url的方式:
- 通过浏览器前进后退来改变url
- 通过a标签来改变
- 通过window.location来改变url
以上这几种情况改变url 都会触发 hashchange事件



history
提供了pushState 和 replaceState 两个方法，这两个方法改变url的path部分不会引起页面的刷新

通过监听 popstate事件 监听 url 的变化

- 通过浏览器前进后退来改变url
- 通过pushState/replaceState 或 a标签改变url会触发 popstate事件