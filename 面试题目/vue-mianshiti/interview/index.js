// computed  watch 的区别
// computed: {
//   newVal() {
//     return this.val + 2
//   }
// },


data() {
  return {
    obj: {

    }
  }
},

// wacth: {
//   obj() {

//   }
// }

vm.$watch('obj', {
  handle: function (val, oldval) {

  },
  deep: true, // 开启深度遍历
  immediate: true
})