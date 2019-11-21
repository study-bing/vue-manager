// template.js
module.exports = {
  vueTemplate: compoenntName => {
    return `<template>
	<div class="${compoenntName}">
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
  <el-button type="primary" class="pull-right" @click="add${compoenntName}">新增</el-button>
</div>
<el-table :data="tableData" border :height="tableHeight" v-if="tableHeight > 0">
      <el-table-column prop="date" label="姓名"></el-table-column>
      <el-table-column prop="date1" label="性别"></el-table-column>
      <el-table-column prop="date2" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址" min-width="150"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
        <el-button @click="toDetail(scope.row)" type="text" size="small">详情</el-button>
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
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    ></el-pagination>
	</div>
</template>
<script>
import tableMixin from '@mixin/tableMixin';
export default {
	name: '${compoenntName}',
	data(){
		return{
      input: '',
			tableData: [
				{
					date: '2016-05-02',
					date1: '2016-05-02',
					date2: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
      ],
      typeOptions: [
				{
					value: '1',
					label: '无评级'
				},
			],
			currentPage: 4,
      tableParams: {
				name: '',
				type: ''
			}
		}
  },
  mixins: [tableMixin],
	methods: {
    /**
     * 获取数据
     * @author linbin
     * @date   2019-11-13
     */
		getData() {},
    /**
     * 前往详情页
     * @author linbin
     * @date   2019-11-13
     * @param  {Object}   row行信息
     */
		toDetail(row) {
			console.log(row);
			this.$router.push({
				path: ` / scenicDetail / $ {
      Math.random() * 100
    }
    `
			});
    },
    /**
     * 删除操作
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
     * 新增
     * @author linbin
     * @date   2019-11-13
     */
		add${compoenntName}() {
		},
	},
	mounted() {
		this.setHeight();
	}
}
</script>
<style lang="less" scoped>

</style>
`;
  },
  entryTemplate: `import Main from './main.vue'
export default Main`
};