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
	},
	{
		meta: {
			title: '用户管理',
			routeActive: '/user',
		},
		path: '/user',
		component: () => import( /* webpackChunkName: "home" */ '@/views/user/User.vue')
	},

	],
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
			title: '门票管理',
			routeActive: '/scenic/scenicList',
		},
		path: '/scenic/ticketList',
		component: () => import( /* webpackChunkName: "home" */ '@/views/scenic/scenicTicket/ScenicTicketList.vue')
	},
	{
		meta: {
			title: '订单管理',
			routeActive: '/order',
		},
		path: '/scenic/orderList',
		component: () => import( /* webpackChunkName: "home" */ '@/views/scenic/orderManager/OrderList.vue')
	},
	{
		meta: {
			title: '订单详情',
			routeActive: '/order',
		},
		path: '/orderDetail/:id',
		component: () => import( /* webpackChunkName: "home" */ '@/views/scenic/orderManager/OrderDetail.vue')
	},
	]
},

];