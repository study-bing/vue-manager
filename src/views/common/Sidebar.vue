<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{
                  threeItem.title
                  }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from '../common/bus';
const isDev = process.env.NODE_ENV !== 'production';
export default {
	data() {
		return {
			collapse: false,
			items: [
				{
					icon: 'el-icon-eleme',
					index: '/dashboard',
					title: '系统首页'
				},
				{
					icon: 'el-icon-document',
					index: '12',
					title: '景区管理',
					subs: [
						{
							index: '/scenic/scenicList',
							title: '景区列表'
						},
						{
							index: '/scenic/bannerList',
							title: 'Banner管理'
						}
					]
				}
			]
		};
	},
	computed: {
		onRoutes() {
			return this.$route.meta.routeActive;
		}
	},
	created() {
		// 通过 Event Bus 进行组件间通信，来折叠侧边栏
		bus.$on('collapse', msg => {
			this.collapse = msg;
			bus.$emit('collapse-content', msg);
		});
		if (isDev) {
			this.items.push({
				icon: 'el-icon-view',
				index: String(this.items.length - 1),
				title: '开发资料',
				subs: [
					{
						index: '/icon',
						title: 'icon图标'
					},
					{
						index: '/DragDialog',
						title: '弹框拖拽'
					},
					{
						index: '/tinymceEditor',
						title: '富文本'
					},
					{
						index: '/tableDrag',
						title: '列表拖拽'
					},
					{
						index: '/sticky',
						title: 'sticky'
					},
					{
						index: '/test',
						title: '测试页面'
					}
				]
			});
		}
	}
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 50px;
  bottom: 0;
  overflow-y: scroll;
  height: 100%;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 180px;
}
.sidebar > ul {
  height: 100%;
}
</style>
