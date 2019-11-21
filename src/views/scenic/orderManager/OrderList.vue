<template>
  <div class="orderList" ref="contents">
    <div class="search-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部" name="all"></el-tab-pane>
        <el-tab-pane label="待支付" name="toPaid"></el-tab-pane>
        <el-tab-pane label="已支付" name="paid"></el-tab-pane>
        <el-tab-pane label="已完成" name="completed"></el-tab-pane>
        <el-tab-pane label="已关闭" name="close"></el-tab-pane>
        <el-tab-pane label="退款中" name="refund"></el-tab-pane>
      </el-tabs>
      <el-input v-model="tableParams.name" class="w-300" placeholder="搜索订单名称"></el-input>
      <label>下单日期：</label>
      <el-date-picker
        class="w200"
        v-model="tableParams.date"
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>
      <label>门票日期：</label>
      <el-date-picker
        class="w200"
        v-model="tableParams.date"
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>
      <el-select v-model="tableParams.type" clearable placeholder="请选择订单类型">
        <el-option
          v-for="item in typeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button type="primary" @click="getData">查询</el-button>
      <el-button @click="clearParams">清除</el-button>
    </div>
    <el-table :data="tableData" border :height="tableHeight" v-if="tableHeight > 0">
      <el-table-column prop="date1" label="订单号"></el-table-column>
      <el-table-column prop="date2" label="门票SPU信息" min-width="120"></el-table-column>
      <el-table-column prop="name" label="下单日期"></el-table-column>
      <el-table-column prop="tel" label="门票日期"></el-table-column>
      <el-table-column prop="address" label="单价"></el-table-column>
      <el-table-column prop="tel" label="数量"></el-table-column>
      <el-table-column prop="tel" label="总价"></el-table-column>
      <el-table-column prop="tel" label="订单所属景区" min-width="120"></el-table-column>
      <el-table-column prop="address" label="购买人信息" min-width="120"></el-table-column>
      <el-table-column prop="tel" label="订票来源"></el-table-column>
      <el-table-column prop="tel" label="订单状态"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="toDetail(scope.row)" type="text" size="small">详情</el-button>
          <el-button @click="orderDelete(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="100"
      layout="total, prev, pager, next, sizes, jumper"
      :total="tableData.length"
    ></el-pagination>
  </div>
</template>
<script>
import tableMixin from '@mixin/tableMixin';
export default {
	name: 'orderList',
	data() {
		return {
			tableData: [
				{
					date: '2016-05-02',
					date1: '2016-05-02',
					date2: '2016-05-02',
					name: '王小虎',
					address: '上海市'
				}
			],
			typeOptions: [
				{
					value: '1',
					label: '无评级'
				},
				{
					value: '2',
					label: '5A'
				},
				{
					value: '3',
					label: '4A'
				},
				{
					value: '4',
					label: '3A'
				},
				{
					value: '5',
					label: '2A'
				}
			],
			tableParams: {
				name: '',
				type: '',
				date: ''
			},
			activeName: 'all'
		};
	},
	mixins: [tableMixin],
	methods: {
		closeDialog() {},
		/**
     * 获取数据
     * @author linbin
     * @date   2019-11-20
     */
		getData() {},
		/**
     * 清除筛选选项
     * @author linbin
     * @date   2019-11-20
     */
		clearParams() {
			this.tableParams = {
				name: '',
				type: ''
			};
		},
		/**
     * 前往详情页
     * @author linbin
     * @date   2019-11-20
     * @param  {Object}   row行信息
     */
		toDetail(row) {
			console.log(row);
			this.$router.push({
				path: `/orderDetail/${Math.random() * 100}`
			});
		},
		/**
     * 删除订单操作
     * @author linbin
     * @date   2019-11-20
     * @param  {Object}   row行信息
     */
		orderDelete(row) {
			this.$confirm('您确定删除此订单吗?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			})
			.then(() => {
				console.log(row);
				this.$message({
					type: 'success',
					message: '删除成功!'
				});
			})
			.catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				});
			});
		},
		/**
     * tab切换
     * @author linbin
     * @date   2019-11-20
     * @param  {Object}   row行信息
     */
		handleClick(tab, event) {
			console.log(tab);
			console.log(event);
		}
	},
	mounted() {
		this.setHeight(380);
	}
};
</script>
<style lang="less" scoped>
.orderList {
}
</style>
