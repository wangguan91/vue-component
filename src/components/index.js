// 依次引入组件
import KingList from "./king-list"
// 将组件存入对象
const components = {
  KingList
}

// 循环注册组件
const install = function(Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  components,
  install
}