export default [{
	path: '/login',
	component: () => import( /* webpackChunkName: "login" */ '@/views/login/Login.vue'),
	meta: {
		title: '登录'
	}
}];
