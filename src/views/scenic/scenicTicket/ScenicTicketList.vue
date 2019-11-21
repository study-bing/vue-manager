<template>
  <div class="scenicTicketList" ref="contents">
    <p class="page-header-title">
      <span>门票管理</span>
      <el-button class="pull-right" size="medium" round @click="back">返回</el-button>
    </p>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="在售门票管理" name="first">
        <scenic-ticket-line></scenic-ticket-line>
      </el-tab-pane>
      <el-tab-pane label="门票SKU管理" name="second">
        <scenic-ticket-sku></scenic-ticket-sku>
      </el-tab-pane>
      <el-tab-pane label="门票类型管理" name="third">
        <scenic-ticket-type></scenic-ticket-type>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import scenicTicketLine from './ScenicTicketLine';
import scenicTicketSku from './ScenicTicketSku';
import scenicTicketType from './ScenicTicketType';
export default {
	name: 'scenicTicketList',
	data() {
		return {
			activeName: 'first'
		};
	},
	components: { scenicTicketLine, scenicTicketSku, scenicTicketType },
	methods: {
		/**
     * 返回上一页面...
     * @author linbin
     * @date   2019-11-13
     */
		back() {
			this.$router.go(-1);
		},
		handleClick(tab, event) {
			console.log(tab, event);
		}
	}
};
</script>
<style lang="less" scoped>
.scenicTicketList {
}
</style>
