<template>
  <div class="scenicTicketType" ref="contents">
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
      <el-button type="primary" class="pull-right" @click="addScenic">添加</el-button>
    </div>
    <el-table :data="tableData" border :height="tableHeight" v-if="tableHeight > 0">
      <el-table-column type="index" width="60" label="序号"></el-table-column>
      <el-table-column prop="num" label="类型编号"></el-table-column>
      <el-table-column prop="name" label="类型名称"></el-table-column>

      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="toDetail(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="scenicDelete(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="10"
      layout="total, prev, pager, next, sizes, jumper"
      :total="tableData.length"
    ></el-pagination>
    <type-set
      :dialogVisible.sync="showSet"
      @closeDialog="closeDialog"
      @submitSuccess="submitSuccess"
    ></type-set>
  </div>
</template>
<script>
import tableMixin from '@mixin/tableMixin';
import typeSet from './ScenicTicketTypeSet';
export default {
	name: 'scenicTicketType',
	data() {
		return {
			tableData: [],
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
	components: { typeSet },
	mixins: [tableMixin],
	methods: {
		handleClick(row) {
			console.log(row);
		},
		addScenic() {
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
				path: `/scenicDetail/${Math.random() * 100}`
			});
		},
		/**
     * 删除景区操作
     * @author linbin
     * @date   2019-11-13
     * @param  {Object}   row行信息
     */
		scenicDelete(row) {
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
		},
		/**
     * 添加成功
     * @author linbin
     * @date   2019-11-13
     * @param  {Object}   value
     */
		submitSuccess(value) {
			this.tableData.push(value);
		}
	},
	mounted() {
		this.setHeight(360);
	}
};
</script>
<style lang="less" scoped>
.scenicTicketType {
}
</style>
