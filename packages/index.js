/**
 * @author monkeywang
 * Date: 17/11/9
 */
import SMButton from './button/index.js';
import WRow from './row/index'
import WCol from './col/index'
import WTag from './tag/index'
import WShowMore from './show-more/index'
import WLimitTextArea from './limit-textarea/index'
import MetaInfo from './meta-info/index'
import WAlert from './alert/index'
import WLoadingBar from './loading-bar/index'
import Skeleton from './skeleton/index'
import './semantic.css'
const components = [
  SMButton,
  WRow,
  WCol,
  WTag,
  WShowMore,
  WLimitTextArea,
  WAlert,
  Skeleton
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  MetaInfo.install(Vue)
  Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  SMButton,
  WRow,
  WCol,
  WTag,
  WShowMore,
  WLimitTextArea,
  MetaInfo,
  WAlert,
  WLoadingBar,
  Skeleton
}
