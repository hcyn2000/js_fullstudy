// 虚拟的DOM类
class Element {
  constructor(type, props, children) {
    this.type = type
    this.props = props
    this.children = children
  }
}

function createElement(type, props, children) {
  return new Element(type, props, children)
}

// 设置属性
function setAttr(node, key, value) {
  switch (key) {
    // node 是input 或者textarea
    case 'vlaue':
      if (node.tagName.toUpperCase() === 'TNPUT' || node.tagName.toUpperCase() === 'TEXTAREA') {
        node.value = value
      } else {
        node.setAttribute(key, value)
      }
      break;
    case 'style':
      node.style.cssText = value
      break;
    default:
      node.setAttribute(key, value)
  }
}

// render方法将vonde转化为真实dom
function render(eleObj) {
  let el = document.createElement(eleObj.type)
  for (let key in eleObj.props) {
    // 设置属性的方法
    setAttr(el, key, eleObj.props[key])
  }
  // 遍历children节点 ,如果是虚拟DOM就递归渲染，不是就代表是文本节点，停止dig
  eleObj.children.forEach(child => {
    child = (child instanceof Element) ? render(child) : document.createTextNode(child)
    el.appendChild(child)
  });
  return el
}

// 将元素插入到页面内
function renderDom(el, target) {
  target.appendChild(el)
}

export { createElement, render, renderDom, Element }