/**
 * @author monkeywang
 * Date: 17/11/9
 */
import Divider from './src/divider.vue';

Divider.install = function (Vue) {
  Vue.component(Divider.name, Divider);
};

export default Divider;
