import { defineComponent, h } from 'vue'
// 拖拽的行为
// 什么东西要拖拽
export default function (Com) {
  console.log(Com);
  // 第二个参数就是script中间那一段
  return defineComponent({
    // render 返回就是该组件需要渲染的
    render() {
      // return h('h3',{},['hhh'])
      // return <h3>哈哈哈</h3>
      return h('div', {
        'onTouchmove': this.handleMove,
        style: { left: this.x + 'px', top: this.y + 'px', position: 'absolute' }
      }, [h(Com)])
    },
    data() {
      return {
        x: 0,
        y: 0
      }
    },
    methods: {
      handleMove(e) {
        const x = e.touches[0].pageX;
        const y = e.touches[0].pageY;
        this.x = x;
        this.y = y;
      }
    }
  })
}
