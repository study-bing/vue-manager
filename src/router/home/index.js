export default [{
	path: '',
	component: () => import( /* webpackChunkName: "home" */ '@/views/common/Home.vue'),
	children: [{
		meta: {
			title: '系统首页',
			routeActive: '/dashboard',
		},
		path: '/dashboard',
		component: () => import( /* webpackChunkName: "home" */ '@/views/dashboard/Dashboard.vue')
	}, ],
},
{
	path: '',
	component: () => import( /* webpackChunkName: "home" */ '@/views/common/Home.vue'),
	meta: {
		title: '景区管理',
	},
	redirect: 'noRedirect',
	children: [{
		meta: {
			title: '景区列表',
			routeActive: '/scenic/scenicList',
		},
		path: '/scenic/scenicList',
		component: () => import( /* webpackChunkName: "home" */ '@/views/scenic/scenicManager/ScenicList.vue')
	},
	{
		meta: {
			title: '景区详情',
			routeActive: '/scenic/scenicList',
		},
		path: '/scenicDetail/:id',
		component: () => import( /* webpackChunkName: "home" */ '@/views/scenic/scenicManager/ScenicDetail.vue')
	},
	{
		meta: {
			title: 'Banner管理',
			routeActive: '/scenic/bannerList',
		},
		path: '/scenic/bannerList',
		component: () => import( /* webpackChunkName: "home" */ '@/views/scenic/scenicBanner/ScenicBannerList.vue')
	},
	]
},

];