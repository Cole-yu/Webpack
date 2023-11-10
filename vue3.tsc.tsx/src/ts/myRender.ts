import { ref, h } from 'vue'

const MyRender = {
  // props: {
  //   msg: Number
  // },
  // setup(props) {
  //   const count = ref(3)
  //   console.log('props', props);
  //   // 返回渲染函数
  //   return () => h('div', props.msg + count.value)
  // },
  
  data() {
    return {
      msg: 'MyRender组件data中数据'
    }
  },
  render() {
    // return h('div', this.msg);
    return h('div', 'MyRender组件写死数据')
  },  
}

export default MyRender