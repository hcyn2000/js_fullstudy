import { ref } from 'vue'
// 多个地方需要拖拽 x y
export default function useDrag() {
  const x = ref(0)
  const y = ref(0)
  const handleMove = (e) => {
    x.value = e.touches[0].pageX
    y.value = e.touches[0].pageY
  }
  return {
    x, y, handleMove
  }
}