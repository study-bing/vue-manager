import Vue from 'vue';
import Router from 'vue-router';
import store from '../vuex/index';

// 手动跳转的页面白名单
const whiteList = [
	'/login'
];
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err);
};
Vue.use(Router);

let routes = [];

const routerContext = require.context('./', true, /index\.js$/);
routerContext.keys().forEach(route => {
	// 如果是根目录的 index.js 、不处理
	if (route.startsWith('./index')) {
		return;
	}
	const routerModule = routerContext(route);
	/**
   * 兼容 import export 和 require module.export 两种规范
   */
	routes = [...routes, ...(routerModule.default || routerModule)];
});

export const router = new Router({
	mode: 'history',
	routes: routes
});
//异步路由（需要权限的页面）
const asyncRouterMap = [{
	path: '',
	component: () => import( /* webpackChunkName: "home" */ '@/views/common/Home.vue'),
	children: [{
		meta: {
			title: '弹框拖拽',
			routeActive: '/dragDialog',
			permission: []
		},
		path: '/dragDialog',
		component: () => import( /* webpackChunkName: "DragDialog" */ '@/views/devFile/DragDialog.vue')
	},
	{
		meta: {
			title: 'Icon',
			routeActive: '/icon',
			permission: []
		},
		path: '/icon',
		component: () => import( /* webpackChunkName: "Icon" */ '@/views/devFile/Icon.vue')
	},
	{
		meta: {
			title: '富文本',
			routeActive: '/tinymceEditor',
			permission: []
		},
		path: '/tinymceEditor',
		component: () => import( /* webpackChunkName: "Icon" */ '@/views/devFile/TinymceEditor.vue')
	},
	{
		meta: {
			title: '列表拖拽',
			routeActive: '/tableDrag',
			permission: []
		},
		path: '/tableDrag',
		component: () => import( /* webpackChunkName: "Icon" */ '@/views/devFile/TableDrag.vue')
	},
	{
		meta: {
			title: 'sticky',
			routeActive: '/sticky',
			permission: []
		},
		path: '/sticky',
		component: () => import( /* webpackChunkName: "Icon" */ '@/views/devFile/Sticky.vue')
	},
	{
		meta: {
			title: '图片上传',
			routeActive: '/cropUpload',
			permission: []
		},
		path: '/cropUpload',
		component: () => import( /* webpackChunkName: "Icon" */ '@/views/devFile/CropUpload.vue')
	},
	{
		meta: {
			title: 'test',
			routeActive: '/test',
			permission: []
		},
		path: '/test',
		component: () => import( /* webpackChunkName: "Icon" */ '@/views/devFile/Test.vue')
	}
	]
}, ];
// router/index.js
/**
 * 根据权限匹配路由
 * @param {array} permission 权限列表（菜单列表）
 * @param {array} asyncRouter 异步路由对象
 */
function routerMatch(permission, asyncRouter) {
	return new Promise(resolve => {
		const routers = [];
		// 创建路由
		function createRouter(permission) {
			// 根据路径匹配到的router对象添加到routers中即可
			permission.forEach(item => {
				if (item.children && item.children.length) {
					createRouter(item.children);
				}
				let path = item.path;
				// 循环异步路由，将符合权限列表的路由加入到routers中
				asyncRouter.find(s => {
					if (s.path === '') {
						s.children.find(y => {
							if (y.path === path) {
								y.meta.permission = item.permission;
							}
						});
						routers.push(s);
					}
					if (s.path === path) {
						s.meta.permission = item.permission;
						routers.push(s);
					}
				});
			});
		}

		createRouter(permission);
		resolve([routers]);
	});
}
// router/index.js
router.beforeEach((to, form, next) => {
	if (localStorage.getItem('nickname')) {
		if (to.path === '/') {
			router.replace('/dashboard');
		} else {
			if (store.state.routeList.length === 0) {
				// 如果没有权限列表，将重新向后台请求一次
				let list = [{
					permission: ['all'],
					path: '/dragDialog'
				}, {
					permission: [],
					path: '/icon'
				}];
				store.dispatch('setRouteList', list);
				// 调用权限匹配的方法;
				routerMatch(list, asyncRouterMap).then(res => {
					//将匹配出来的权限列表进行addRoutes
					router.addRoutes(res[0]);
					router.addRoutes([{
						path: '*',
						redirect: '/dashboard'
					}]);
					next(to.path);
				});
			} else {
				if (to.matched.length) {
					next();
				} else {
					router.replace('/login');
				}
			}
		}
	} else {
		if (whiteList.indexOf(to.path) >= 0) {
			next();
		} else {
			router.replace('/login');
		}
	}
});