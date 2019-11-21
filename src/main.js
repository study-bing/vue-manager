import Vue from 'vue';
import App from './App.vue';
import {
	router
} from './router';
import store from './vuex';
import './components';
import ElementUI from 'element-ui'; // eslint-disable-next-line
import "element-ui/lib/theme-chalk/index.css";
// import './assets/css/icon.css';
import './modules/directives';
import 'assembly-css/lib/index.scss';
import './assets/css/main.less';
import './assets/css/color-dark.css'; /*深色主题*/
import './assets/css/el-cover.less'; /*覆盖饿了么组件样式*/
import './modules/iconfont.js';
Vue.config.productionTip = false;

Vue.use(ElementUI);

require('./modules/toFixed.js');/*重置toFixed*/
// 引入svg
const req = require.context('./assets/svg', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);
//main.js
//按扭权限指令
Vue.directive('allow', {
	inserted: (el, binding, vnode) => {
		let permissionList = vnode.context.$route.meta.permission;
		console.log(permissionList);
		console.log(binding);
		if (!permissionList.includes(binding.value)) {
			el.parentNode.
			removeChild(el);
		}
	}
});
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');