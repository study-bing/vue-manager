export default [{
	path: '/',
	redirect: '/index'
},
{
	path: '/',
	component: () => import( /* webpackChunkName: "home" */ '@/views/common/Home.vue'),
	children: [{
		meta: {
			title: '系统首页'
		},
		path: '/index',
		component: () => import( /* webpackChunkName: "home" */ '@/views/index/Index.vue')
	},
	{
		meta: {
			title: 'DragDialog'
		},
		path: '/DragDialog',
		component: () => import( /* webpackChunkName: "DragDialog" */ '@/views/devFile/DragDialog.vue')
	},
	{
		meta: {
			title: 'Icon'
		},
		path: '/Icon',
		component: () => import( /* webpackChunkName: "Icon" */ '@/views/devFile/Icon.vue')
	}
	]
}
];
