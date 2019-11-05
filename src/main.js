import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './vuex';
import './components';
import ElementUI from 'element-ui'; // eslint-disable-next-line
import "element-ui/lib/theme-chalk/index.css";
import './assets/css/commom.less';
import './assets/css/icon.css';
import './modules/directives';
import 'assembly-css/lib/index.scss';
Vue.config.productionTip = false;

Vue.use(ElementUI);
require('./modules/toFixed.js');

// 使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title}`;
	const role = sessionStorage.getItem('ms_username');
	if (!role && to.path !== '/login') {
		next('/login');
	} else {
		next();
	}
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');