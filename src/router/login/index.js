export default [{
	path: '/',
	component: () => import( /* webpackChunkName: "login" */ '@/views/login/Login.vue'),
	meta: {
		title: '登录'
	}
}];