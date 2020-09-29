# DOM树
字节数据 ==> 字符串 ==> 标记(Token)
标记完成之后，这些标记会紧接着转换为node，不同的node会根据之前的联系构建一颗DOM树

# CSSOM树
过程类似于DOM的产生，但是更加消耗性能，因为样式可以是自行设定的，也可能是继承获得的。这个过程浏览器得递归CSSOM树，才能确定具体的元素是什么样式

# 渲染树
将DOM树与CSSOM树结合，生成渲染树（Render tree）
渲染树不是简单的将两者合并，渲染树只会包括:需要显示的节点和这些节点的样式信息。比如: display:none的节点就不在渲染树中显示

当浏览器生成渲染树之后，就会根据渲染树进行布局(回流)， 然后GPU(图形处理器)绘制


1.浏览器渲染过程：

　　（1）解析HTML，构建DOM树，解析CSS，构建CSSOM树，

　　（2）将DOM树与CSSOM树结合，生成渲染树（Render tree）

　　（3）Layout（回流）：根据生成的渲染树，进行回流，得到节点的几何信息（位置，大小）

　　（4）Painting（重绘）：根据渲染树以及回流得到的几何信息，得到绝对像素；

　　（5）Display：将像素发送给GPU（图形处理器），展示在页面上。

# 为什么操作DOM慢
因为DOM树归渲染引擎操作，js归js引擎操作，当使用js直接操作DOM时，涉及到两个线程之间的通信，势必带来性能的损耗


# 什么情况会阻塞渲染
1. HTML扁平化不够
2. css嵌套太深
- 想要渲染更快:
1. HTML扁平化
2. 优化css选择器



# 回流 (Reflow) && 重绘 (Repaint)
https://www.jianshu.com/p/e081f9aa03fb
https://www.cnblogs.com/wwwxxjsyy/p/12559272.html
https://juejin.im/post/6844903779700047885

- 回流: 计算渲染树每一个节点在设备视口的确切位置和大小,这个计算的阶段就叫回流

每个页面至少需要一次回流，就是在页面第一次加载的时候，这时候是一定会发生回流的，因为要构建渲染树(render tree)。在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程成为重绘。

- 重绘: 拿到渲染树中节点的几何信息后，将节点转换为屏幕上的实际像素，这个阶段叫做重绘节点


# 何时发生回流和重绘
回流必将引起重绘，而重绘不一定会引起回流。比如：只有颜色改变的时候就只会发生重绘而不会引起回流
当页面布局和几何属性改变时就需要回流
发生回流: 
1. 添加或者删除可见的DOM元素
2. 元素位置改变
3. 元素尺寸改变 (内外边距、填充、边框、宽度和高度)
4. 内容改变 (文本变化、替换不同尺寸的图片)
5. 页面初次渲染 (每次刷新页面)
6. 浏览器窗口尺寸变化
- 回流必将引起重绘，而重绘不一定会引起回流。


# 浏览器的优化机制
目前大多数浏览器都会通过队列化修改批量的回流过程，浏览器会将修改操作放到队列里，直到一段时间后或者达到预值，才会一次性全部回流，清空队列。这样就会让多次的回流、重绘变成一次回流重绘。
- 获取布局信息的操作，会强制队列刷新（生效）
  offsetTop、offsetLeft、offsetWidth、offsetHeight
  scrollTop、scrollLeft、scrollWidth、scrollHeight
  clientTop、clientLeft、clientWidth、clientHeight
  getComputedStyle()
  getBoundingClientRect


# 减少回流和重绘
https://blog.csdn.net/chensong0708/article/details/6626565?locationNum=2

修改单一DOM:
  1. cssText
  2. 使用类名 className
批量修改DOM:
  1. 使元素脱离文档流,对其进行多次修改，将元素带回文档流中

脱离文档流的方式:
  1. 隐藏元素
  2. 使用文档片段构建子树
  3. 将原始元素拷贝到脱离文档的节点中，修改后再替换原始元素



let el = document.getElementById( 'app');
el.style.width = (el.offsetwidth+1) +'px';
el.style.width = 1 + 'px'
触发了一次回流一次重绘
