<template>
  <div class="scenicTicketLine" ref="contents">
    <div class="search-content">
      <el-input v-model="tableParams.name" class="w-300" placeholder="搜索景区名称"></el-input>
      <el-select v-model="tableParams.type" clearable placeholder="请选择景区类型">
        <el-option
          v-for="item in typeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button type="primary" @click="getData">查询</el-button>
      <el-button @click="clearParams">清除</el-button>
      <el-button type="primary" class="pull-right" @click="addTicketLine">添加</el-button>
    </div>
    <el-table :data="tableData" border :height="tableHeight" v-if="tableHeight > 0">
      <el-table-column type="index" width="60" label="序号"></el-table-column>
      <el-table-column prop="date1" label="在线门票编号" min-width="110"></el-table-column>
      <el-table-column prop="date2" label="所属景区"></el-table-column>
      <el-table-column prop="name" label="门票类型"></el-table-column>
      <el-table-column prop="tel" label="门票名称"></el-table-column>
      <el-table-column prop="tel" label="原价"></el-table-column>
      <el-table-column prop="tel" label="折扣"></el-table-column>
      <el-table-column prop="tel" label="现价"></el-table-column>
      <el-table-column prop="tel" label="已售数量"></el-table-column>
      <el-table-column prop="tel" label="库存"></el-table-column>
      <el-table-column prop="tel" label="售票状态"></el-table-column>
      <el-table-column prop="tel" label="发布时间"></el-table-column>
      <el-table-column fixed="right" label="操作" min-width="110">
        <template slot-scope="scope">
          <el-button @click="toDetail(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="ticketDelete(scope.row)" type="text" size="small">删除</el-button>
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
    <line-set :dialogVisible.sync="showSet" @closeDialog="closeDialog"></line-set>
  </div>
</template>
<script>
import tableMixin from '@mixin/tableMixin';
import lineSet from './ScenicTicketLineSet';
export default {
	name: 'scenicTicketLine',
	data() {
		return {
			tableData: [
				{
					date: '2016-05-02',
					date2: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}
			],
			showSet: false,
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
				type: ''
			}
		};
	},
	components: { lineSet },
	mixins: [tableMixin],
	methods: {
		handleClick(row) {
			console.log(row);
		},
		addTicketLine() {
			this.showSet = true;
		},
		closeDialog() {},
		/**
     * 获取数据
     * @author linbin
     * @date   2019-11-13
     */
		getData() {},
		/**
     * 清除筛选选项
     * @author linbin
     * @date   2019-11-13
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
     * @date   2019-11-13
     * @param  {Object}   row行信息
     */
		toDetail(row) {
			console.log(row);
			this.$router.push({
				path: `/ticketDetail/${Math.random() * 100}`
			});
		},
		/**
     * 删除景区操作
     * @author linbin
     * @date   2019-11-13
     * @param  {Object}   row行信息
     */
		ticketDelete(row) {
			this.$confirm('您确定删除此景区吗?', '提示', {
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
		}
	},
	mounted() {
		this.setHeight(360);
	}
};
</script>
<style lang="less" scoped>
.scenicTicketLine {
}
</style>
